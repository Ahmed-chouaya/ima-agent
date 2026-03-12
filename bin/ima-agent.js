#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// ─────────────────────────────────────────────
// IMA Framework — Interactive Setup Wizard
// Usage: npx ima-agent [target-directory] [--tool claude|opencode|cursor] [--skip-wizard]
// ─────────────────────────────────────────────

const BANNER = `
██╗███╗   ███╗ █████╗
██║████╗ ████║██╔══██╗   FRAMEWORK
██║██╔████╔██║███████║   AGENT
██║██║╚██╔╝██║██╔══██║
██║██║ ╚═╝ ██║██║  ██║   v1.2.4
╚═╝╚═╝     ╚═╝╚═╝  ╚═╝

Transform any AI tool into an influencer
marketing research powerhouse.
`;

const TOOL_OPTIONS = {
  '1': { name: 'claude', label: 'Claude Code (Anthropic)', description: 'Creates CLAUDE.md + .claude/commands/' },
  '2': { name: 'opencode', label: 'OpenCode', description: 'Creates AGENTS.md + .opencode/(agents + commands)' },
  '3': { name: 'cursor', label: 'Cursor', description: 'Creates .cursorrules' },
  '4': { name: 'none', label: 'Manual / Other', description: 'Base files only, configure manually' },
};

const NICHE_EXAMPLES = [
  'beauty & skincare',
  'fitness & wellness',
  'tech & gadgets',
  'food & cooking',
  'fashion & lifestyle',
  'gaming',
  'travel',
  'parenting',
  'finance & investing',
  'education',
];

// ── Utilities ──────────────────────────────────

function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function countFiles(dir) {
  let count = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      count += countFiles(path.join(dir, entry.name));
    } else {
      count++;
    }
  }
  return count;
}

function ask(rl, question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer.trim()));
  });
}

function printCentered(text) {
  const width = process.stdout.columns || 80;
  const lines = text.split('\n');
  
  // Find the maximum line length to center the block as a whole
  let maxLength = 0;
  for (const line of lines) {
    if (line.length > maxLength) maxLength = line.length;
  }
  
  const padding = Math.max(0, Math.floor((width - maxLength) / 2));
  const padStr = ' '.repeat(padding);
  
  console.log();
  for (const line of lines) {
    if (line.trim() === '') {
      console.log();
    } else {
      console.log(padStr + line);
    }
  }
  console.log();
}

function printStep(num, total, title) {
  console.log('');
  console.log(`─────────────────────────────────────────`);
  console.log(`  Step ${num} of ${total}: ${title}`);
  console.log(`─────────────────────────────────────────`);
  console.log('');
}

function maskKey(key) {
  if (!key || key.length < 8) return '****';
  return key.substring(0, 4) + '...' + key.substring(key.length - 4);
}

// ── Installers ─────────────────────────────────

function installBase(templateDir, targetDir) {
  const imaSrc = path.join(templateDir, '.ima');
  const imaDest = path.join(targetDir, '.ima');
  copyDirSync(imaSrc, imaDest);

  fs.copyFileSync(
    path.join(templateDir, 'config.yaml'),
    path.join(targetDir, 'config.yaml')
  );

  fs.copyFileSync(
    path.join(templateDir, 'AGENTS.md'),
    path.join(targetDir, 'AGENTS.md')
  );

  fs.copyFileSync(
    path.join(templateDir, 'README.md'),
    path.join(targetDir, 'README.md')
  );

  const clientsSrc = path.join(templateDir, 'clients');
  const clientsDest = path.join(targetDir, 'clients');
  copyDirSync(clientsSrc, clientsDest);
}

function installToolIntegration(templateDir, targetDir, tool) {
  const toolDir = path.join(templateDir, 'tools', tool);
  if (!fs.existsSync(toolDir)) {
    console.log(`   ⚠️  No integration template found for: ${tool}`);
    return;
  }

  const entries = fs.readdirSync(toolDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(toolDir, entry.name);
    const destPath = path.join(targetDir, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function updateConfig(targetDir, updates) {
  const configPath = path.join(targetDir, 'config.yaml');
  let config = fs.readFileSync(configPath, 'utf8');

  // Update agency name
  if (updates.agencyName) {
    config = config.replace(
      /name:\s*".*"/,
      `name: "${updates.agencyName}"`
    );
  }

  // Update niche
  if (updates.niche) {
    config = config.replace(
      /default_niche:\s*".*"/,
      `default_niche: "${updates.niche}"`
    );
  }

  // Update YouTube API
  if (updates.youtubeApiKey) {
    // Add YouTube API section to integrations
    const ytSection = `  youtube_api:
    enabled: true
    api_key: "${updates.youtubeApiKey}"
    # YouTube Data API v3 — used by Scout agent for YouTube influencer discovery
    # Endpoints: search, channels, videos, commentThreads
    # Rate limit: 10,000 units/day (free tier)`;

    // Insert before the closing of integrations (before notion section or at end)
    if (config.includes('  notion:')) {
      config = config.replace('  notion:', ytSection + '\n  notion:');
    } else {
      // Append to integrations section
      config = config.replace(
        /integrations:\n/,
        `integrations:\n${ytSection}\n`
      );
    }
  }

  fs.writeFileSync(configPath, config);
}

// ── Steps ──────────────────────────────────────

async function step1_tool(rl) {
  printStep(1, 4, '🔧 AI Tool Selection');

  console.log('Which AI coding tool will you use with IMA?\n');
  Object.entries(TOOL_OPTIONS).forEach(([key, val]) => {
    console.log(`   ${key}. ${val.label}`);
    console.log(`      ${val.description}\n`);
  });

  const answer = await ask(rl, 'Choose (1-4): ');
  const choice = TOOL_OPTIONS[answer];

  if (!choice) {
    console.log('\n❌ Invalid choice. Please run again and select 1-4.');
    process.exit(1);
  }

  console.log(`\n   ✅ ${choice.label} selected\n`);
  return choice;
}

async function step2_agency(rl) {
  printStep(2, 4, '🏢 Agency Setup');

  console.log('Let\'s personalize your IMA workspace.\n');

  const agencyName = await ask(rl, '   Agency/team name (or press Enter to skip): ');

  console.log('');
  console.log('   What niche do you primarily work in?\n');
  console.log('   Examples:');
  NICHE_EXAMPLES.forEach((n, i) => {
    console.log(`     ${i + 1}. ${n}`);
  });
  console.log('');

  const nicheInput = await ask(rl, '   Your niche (name or number, Enter to skip): ');

  let niche = '';
  const nicheNum = parseInt(nicheInput);
  if (nicheNum >= 1 && nicheNum <= NICHE_EXAMPLES.length) {
    niche = NICHE_EXAMPLES[nicheNum - 1];
  } else if (nicheInput) {
    niche = nicheInput;
  }

  if (agencyName) console.log(`\n   ✅ Agency: ${agencyName}`);
  if (niche) console.log(`   ✅ Niche: ${niche}`);
  if (!agencyName && !niche) console.log('\n   ⏭️  Skipped — you can set this in config.yaml later');

  return { agencyName, niche };
}

async function step3_youtube(rl) {
  printStep(3, 4, '🎬 YouTube API Setup (Optional)');

  console.log('IMA can use the YouTube Data API to discover and analyze');
  console.log('YouTube influencers more accurately and efficiently.\n');
  console.log('Without it, the Scout agent (🔍 Younes) will fall back');
  console.log('to general web search for YouTube research.\n');

  console.log('   Benefits of connecting the YouTube API:');
  console.log('   • Search YouTube channels by keyword, topic, and region');
  console.log('   • Get exact subscriber counts and video statistics');
  console.log('   • Analyze upload frequency and engagement patterns');
  console.log('   • Access comment data for sentiment analysis\n');

  console.log('   How to get a free API key:');
  console.log('   1. Go to https://console.cloud.google.com');
  console.log('   2. Create a project (or select existing)');
  console.log('   3. Enable "YouTube Data API v3"');
  console.log('   4. Go to Credentials → Create API Key');
  console.log('   5. Copy the key and paste it below\n');

  const apiKey = await ask(rl, '   YouTube API key (or press Enter to skip): ');

  if (apiKey) {
    console.log(`\n   ✅ YouTube API key saved: ${maskKey(apiKey)}`);
    console.log('   📊 Younes (Scout) will use YouTube Data API for channel discovery');
  } else {
    console.log('\n   ⏭️  Skipped — Younes will use web search for YouTube research');
    console.log('   💡 You can add it later in config.yaml under integrations.youtube_api');
  }

  return apiKey || null;
}

async function step4_install(targetDir, templateDir, toolChoice, agencyInfo, youtubeApiKey) {
  printStep(4, 4, '📦 Installing IMA Framework');

  // Install base
  console.log('   📁 Copying core framework...');
  fs.mkdirSync(targetDir, { recursive: true });
  installBase(templateDir, targetDir);

  // Install tool integration
  if (toolChoice.name !== 'none') {
    console.log(`   🔧 Setting up ${toolChoice.label} integration...`);
    installToolIntegration(templateDir, targetDir, toolChoice.name);
  }

  // Apply config updates
  const hasUpdates = agencyInfo.agencyName || agencyInfo.niche || youtubeApiKey;
  if (hasUpdates) {
    console.log('   ⚙️  Applying your configuration...');
    updateConfig(targetDir, {
      agencyName: agencyInfo.agencyName,
      niche: agencyInfo.niche,
      youtubeApiKey,
    });
  }

  // Summary
  const fileCount = countFiles(targetDir);

  console.log('');
  console.log('─────────────────────────────────────────');
  console.log('');
  console.log('✅ IMA Framework installed successfully!');
  console.log('');
  console.log(`   📂 ${fileCount} files created in ${targetDir}`);
  console.log('');
  console.log('   The IMA Team:');
  console.log('   ┌────────────────────────────────────────────┐');
  console.log('   │ 🎯 Abu Lahya    — Agency Director & Router │');
  console.log('   │ 🧙 Oussema      — Guided Workflow Advisor  │');
  console.log('   │ 🔍 Younes       — Influencer Scout         │');
  console.log('   │ 🏢 Dylan        — Brand Strategist         │');
  console.log('   │ 📋 Kushtrim     — Campaign Architect       │');
  console.log('   │ 🔎 Ahmed        — Content Auditor          │');
  console.log('   │ 📊 Michael      — ROI Analyst              │');
  console.log('   │ 📧 Ammar        — Outreach Manager         │');
  console.log('   └────────────────────────────────────────────┘');
  console.log('');
  console.log(`   📋 8 agent personas (YAML)    📝 8 output templates`);
  console.log(`   🔄 7 workflow phases          📊 8 knowledge base refs`);
  console.log(`   🆘 ima-help system            🎭 Party Mode`);
  console.log(`   ✅ 3 validation checklists    📤 5 output adapters`);

  if (toolChoice.name !== 'none') {
    const toolFiles = {
      claude: '   🔧 Claude Code: CLAUDE.md + .claude/commands/ (8 slash commands)',
      opencode: '   🔧 OpenCode: .opencode/ agents (8) + commands (8)',
      cursor: '   🔧 Cursor: .cursorrules',
    };
    console.log(toolFiles[toolChoice.name] || '');
  }

  if (youtubeApiKey) {
    console.log('   🎬 YouTube Data API: Connected');
  }

  console.log('');
  console.log('─────────────────────────────────────────');
  console.log('');
  console.log('🚀 Next Steps:');
  console.log('');

  if (toolChoice.name === 'claude' || toolChoice.name === 'opencode') {
    console.log('   1. Open this folder in your AI tool');
    console.log('   2. Type /ima to start a session with Abu Lahya');
    console.log('   3. Or type /assist for Oussema\'s guided wizard');
    console.log('   4. Type ima-help anytime to see what to do next');
  } else if (toolChoice.name === 'cursor') {
    console.log('   1. Open this folder in Cursor');
    console.log('   2. Tell Cursor: "Read AGENTS.md and start a session"');
    console.log('   3. Use trigger codes (SD, BA, CP) or agent names');
  } else {
    console.log('   1. Open this folder in your AI tool');
    console.log('   2. Tell your AI: "Read AGENTS.md and start a session"');
    console.log('   3. Reference the trigger codes in AGENTS.md');
  }

  console.log('');
  console.log('─────────────────────────────────────────');
  console.log('');
  console.log('🎯 Happy researching!');
  console.log('');
}

// ── Main ───────────────────────────────────────

async function main() {
  printCentered(BANNER);

  const args = process.argv.slice(2);

  // Parse arguments
  let targetDir = '.';
  let toolFlag = null;
  let skipWizard = false;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--tool' && args[i + 1]) {
      toolFlag = args[i + 1].toLowerCase();
      i++;
    } else if (args[i] === '--skip-wizard') {
      skipWizard = true;
    } else if (!args[i].startsWith('-')) {
      targetDir = args[i];
    }
  }

  targetDir = path.resolve(targetDir);
  const templateDir = path.join(__dirname, '..', 'template');
  if (!fs.existsSync(templateDir)) {
    console.error('❌ Template directory not found. Package may be corrupted.');
    process.exit(1);
  }

  // Check if already installed
  const isInstalled = fs.existsSync(path.join(targetDir, '.ima'));
  
  if (isInstalled && !skipWizard) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    console.log('⚠️  IMA framework already detected in this directory.');
    const answer = await ask(rl, '   Would you like to update to the latest version? (y/N): ');
    rl.close();

    if (answer.toLowerCase() === 'y') {
      console.log('\n🚀 Updating IMA Framework...');
      
      // Update core engine
      console.log('   📁 Updating engine (.ima/)...');
      copyDirSync(path.join(templateDir, '.ima'), path.join(targetDir, '.ima'));

      // Update registries
      console.log('   📝 Updating registries (AGENTS.md, README.md)...');
      fs.copyFileSync(path.join(templateDir, 'AGENTS.md'), path.join(targetDir, 'AGENTS.md'));
      fs.copyFileSync(path.join(templateDir, 'README.md'), path.join(targetDir, 'README.md'));

      // Update client template (but not existing clients)
      console.log('   📋 Updating client blueprints...');
      copyDirSync(path.join(templateDir, 'clients', '_template'), path.join(targetDir, 'clients', '_template'));

      // Detect and update tool integrations
      if (fs.existsSync(path.join(targetDir, 'CLAUDE.md'))) {
        console.log('   🔧 Updating Claude Code integration...');
        installToolIntegration(templateDir, targetDir, 'claude');
      } else if (fs.existsSync(path.join(targetDir, '.opencode'))) {
        console.log('   🔧 Updating OpenCode integration...');
        installToolIntegration(templateDir, targetDir, 'opencode');
      } else if (fs.existsSync(path.join(targetDir, '.cursorrules'))) {
        console.log('   🔧 Updating Cursor rules...');
        installToolIntegration(templateDir, targetDir, 'cursor');
      }

      console.log('\n✅ Update complete! Your configuration and client data were preserved.\n');
      return;
    } else {
      console.log('\n⏭️  Update cancelled.\n');
      process.exit(0);
    }
  } else if (isInstalled && skipWizard) {
    console.log('⚠️  IMA already installed. Skipping (--skip-wizard active).');
    process.exit(0);
  }

  // Interactive wizard
  console.log('Welcome to the IMA Framework setup wizard!');
  console.log(`📁 Installing to: ${targetDir}\n`);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  try {
    // Step 1: Tool selection (or use flag)
    let toolChoice;
    if (toolFlag && TOOL_OPTIONS[Object.keys(TOOL_OPTIONS).find(k => TOOL_OPTIONS[k].name === toolFlag)]) {
      toolChoice = Object.values(TOOL_OPTIONS).find(t => t.name === toolFlag);
      console.log(`🔧 Tool: ${toolChoice.label} (from --tool flag)\n`);
    } else {
      toolChoice = await step1_tool(rl);
    }

    // Step 2: Agency info
    const agencyInfo = await step2_agency(rl);

    // Step 3: YouTube API (optional)
    const youtubeApiKey = await step3_youtube(rl);

    // Step 4: Install
    await step4_install(targetDir, templateDir, toolChoice, agencyInfo, youtubeApiKey);
  } finally {
    rl.close();
  }
}

main().catch((err) => {
  console.error('❌ Installation failed:', err.message);
  process.exit(1);
});
