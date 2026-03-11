#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// ─────────────────────────────────────────────
// IMA Framework — Scaffolding CLI
// Usage: npx ima-agent [target-directory] [--tool claude|opencode|cursor]
// ─────────────────────────────────────────────

const BANNER = `

    ██╗███╗   ███╗ █████╗
    ██║████╗ ████║██╔══██╗   FRAMEWORK
    ██║██╔████╔██║███████║   AGENT
    ██║██║╚██╔╝██║██╔══██║
    ██║██║ ╚═╝ ██║██║  ██║
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

function installBase(templateDir, targetDir) {
  // Copy core framework files
  const imaSrc = path.join(templateDir, '.ima');
  const imaDest = path.join(targetDir, '.ima');
  copyDirSync(imaSrc, imaDest);

  // Copy config
  fs.copyFileSync(
    path.join(templateDir, 'config.yaml'),
    path.join(targetDir, 'config.yaml')
  );

  // Copy AGENTS.md
  fs.copyFileSync(
    path.join(templateDir, 'AGENTS.md'),
    path.join(targetDir, 'AGENTS.md')
  );

  // Copy README
  fs.copyFileSync(
    path.join(templateDir, 'README.md'),
    path.join(targetDir, 'README.md')
  );

  // Create clients directory with template
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

  // Copy all tool-specific files to the target root
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

function printSuccess(targetDir, toolName) {
  const fileCount = countFiles(targetDir);

  const toolFiles = {
    claude: '   🔧 Claude Code: CLAUDE.md + .claude/commands/ (8 slash commands)',
    opencode: '   🔧 OpenCode: .opencode/ agents (8) + commands (8)',
    cursor: '   🔧 Cursor: .cursorrules',
    none: '   🔧 Manual setup: Use AGENTS.md as reference',
  };

  console.log('');
  console.log('✅ IMA Framework installed successfully!');
  console.log('');
  console.log(`   📂 ${fileCount} files created in ${targetDir}`);
  console.log('   📋 8 AI agent personas');
  console.log('   🔄 7 research workflows');
  console.log('   📝 8 output templates');
  console.log('   📊 8 knowledge base references');
  console.log('   ✅ 3 validation checklists');
  console.log('   📤 5 output adapters');
  console.log(toolFiles[toolName] || '');
  console.log('');
  console.log('─────────────────────────────────────────');
  console.log('');
  console.log('🚀 Next Steps:');
  console.log('');
  console.log('   1. Edit config.yaml with your agency info');
  console.log('   2. Open this folder in your AI tool');

  if (toolName === 'claude') {
    console.log('   3. Type /ima to start a session');
    console.log('   4. Type /scout to find influencers');
  } else if (toolName === 'opencode') {
    console.log('   3. Type /ima to start a session');
    console.log('   4. Type /scout to find influencers');
  } else if (toolName === 'cursor') {
    console.log('   3. Tell Cursor: "Read AGENTS.md and start a session"');
    console.log('   4. Use /scout, /brand, /campaign as prompts');
  } else {
    console.log('   3. Tell your AI: "Read AGENTS.md and start a session"');
    console.log('   4. Reference the slash commands in AGENTS.md');
  }

  console.log('');
  console.log('─────────────────────────────────────────');
  console.log('');
  console.log('🎯 Happy researching!');
  console.log('');
}

function main() {
  console.log(BANNER);

  const args = process.argv.slice(2);

  // Parse arguments
  let targetDir = '.';
  let toolFlag = null;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--tool' && args[i + 1]) {
      toolFlag = args[i + 1].toLowerCase();
      i++;
    } else if (!args[i].startsWith('-')) {
      targetDir = args[i];
    }
  }

  targetDir = path.resolve(targetDir);

  // Check if already installed
  if (fs.existsSync(path.join(targetDir, '.ima'))) {
    console.log('⚠️  IMA framework already installed in this directory.');
    console.log('   To reinstall, remove the .ima directory first.');
    process.exit(1);
  }

  // Template directory
  const templateDir = path.join(__dirname, '..', 'template');
  if (!fs.existsSync(templateDir)) {
    console.error('❌ Template directory not found. Package may be corrupted.');
    process.exit(1);
  }

  // If tool was specified via flag, install directly
  if (toolFlag && ['claude', 'opencode', 'cursor', 'none'].includes(toolFlag)) {
    console.log(`📁 Installing to: ${targetDir}`);
    console.log(`🔧 Tool: ${toolFlag}\n`);

    fs.mkdirSync(targetDir, { recursive: true });
    installBase(templateDir, targetDir);
    if (toolFlag !== 'none') {
      installToolIntegration(templateDir, targetDir, toolFlag);
    }
    printSuccess(targetDir, toolFlag);
    return;
  }

  // Interactive tool selection
  console.log('Which AI coding tool will you use with IMA?\n');
  Object.entries(TOOL_OPTIONS).forEach(([key, val]) => {
    console.log(`   ${key}. ${val.label}`);
    console.log(`      ${val.description}\n`);
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Choose (1-4): ', (answer) => {
    rl.close();

    const choice = TOOL_OPTIONS[answer.trim()];
    if (!choice) {
      console.log('\n❌ Invalid choice. Please run again and select 1-4.');
      process.exit(1);
    }

    console.log(`\n📁 Installing to: ${targetDir}`);
    console.log(`🔧 Tool: ${choice.label}\n`);

    fs.mkdirSync(targetDir, { recursive: true });
    installBase(templateDir, targetDir);
    if (choice.name !== 'none') {
      installToolIntegration(templateDir, targetDir, choice.name);
    }
    printSuccess(targetDir, choice.name);
  });
}

main();
