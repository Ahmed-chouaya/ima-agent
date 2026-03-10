#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// ─────────────────────────────────────────────
// IMA Framework — Scaffolding CLI
// Usage: npx create-ima [target-directory]
// ─────────────────────────────────────────────

const BANNER = `
╔══════════════════════════════════════════════════╗
║                                                  ║
║   🎯  IMA Framework — Influencer Marketing Agent ║
║                                                  ║
║   Transform any AI tool into an influencer        ║
║   marketing research powerhouse.                  ║
║                                                  ║
╚══════════════════════════════════════════════════╝
`;

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

function main() {
  console.log(BANNER);

  // Determine target directory
  const args = process.argv.slice(2);
  const targetDir = path.resolve(args[0] || '.');

  // Check if target already has IMA
  if (fs.existsSync(path.join(targetDir, '.ima'))) {
    console.log('⚠️  IMA framework already installed in this directory.');
    console.log('   To reinstall, remove the .ima directory first.');
    process.exit(1);
  }

  // Source template directory
  const templateDir = path.join(__dirname, '..', 'template');

  if (!fs.existsSync(templateDir)) {
    console.error('❌ Template directory not found. Package may be corrupted.');
    process.exit(1);
  }

  console.log(`📁 Installing IMA framework to: ${targetDir}\n`);

  // Create target directory if needed
  fs.mkdirSync(targetDir, { recursive: true });

  // Copy template files
  copyDirSync(templateDir, targetDir);

  // Create additional client directory structure
  const clientsDir = path.join(targetDir, 'clients');
  fs.mkdirSync(clientsDir, { recursive: true });

  // Create a .gitkeep in clients
  fs.writeFileSync(path.join(clientsDir, '.gitkeep'), '');

  // Count what was installed
  const fileCount = countFiles(targetDir);

  console.log('✅ IMA Framework installed successfully!\n');
  console.log(`   📂 ${fileCount} files created`);
  console.log(`   📋 7 AI agent personas`);
  console.log(`   🔄 7 research workflows`);
  console.log(`   📝 7 output templates`);
  console.log(`   📊 8 knowledge base references`);
  console.log(`   ✅ 3 validation checklists`);
  console.log(`   📤 4 output adapters\n`);

  console.log('─────────────────────────────────────────');
  console.log('');
  console.log('🚀 Quick Start:');
  console.log('');
  console.log('   1. Edit config.yaml with your agency/niche info');
  console.log('   2. Add your first client:');
  console.log('      Create a folder: clients/my-client/');
  console.log('      Copy the client config template');
  console.log('   3. Open this folder in your AI coding tool');
  console.log('   4. Tell your AI: "Read AGENTS.md and start a session"');
  console.log('');
  console.log('📖 Available commands:');
  console.log('   /ima start       — Initialize a session');
  console.log('   /ima client      — Manage clients');
  console.log('   /scout discover  — Find influencers');
  console.log('   /brand audit     — Analyze a brand');
  console.log('   /campaign plan   — Design a campaign');
  console.log('   /audit full      — Vet an influencer');
  console.log('   /outreach draft  — Craft outreach messages');
  console.log('   /roi analyze     — Calculate ROI');
  console.log('');
  console.log('─────────────────────────────────────────');
  console.log('');
  console.log('🎯 Happy researching!');
  console.log('');
}

main();
