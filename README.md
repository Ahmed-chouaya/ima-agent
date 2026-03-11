# ima-agent

<div align="center">
<pre style="background:transparent; border:none; display:inline-block; text-align:left; font-family:monospace; margin:0; padding:20px;">
██╗███╗   ███╗ █████╗
██║████╗ ████║██╔══██╗
██║██╔████╔██║███████║
██║██║╚██╔╝██║██╔══██║
██║██║ ╚═╝ ██║██║  ██║
╚═╝╚═╝     ╚═╝╚═╝  ╚═╝
</pre>
</div>

> 🎯 Install the IMA Framework — Influencer Marketing Agent

**IMA** is an agentic methodology framework that transforms any AI coding tool into a team of influencer marketing specialists. Think [BMAD](https://github.com/bmadcode/BMAD-METHOD), but for influencer marketing.

## ⚡ Installation

The IMA framework is installed via an interactive CLI wizard that sets up your agency workspace, connects your preferred AI tool, and configures API integrations.

```bash
# Basic setup wizard (recommended)
npx ima-agent .
```

The interactive wizard will guide you through 4 setup steps:
1. **AI Tool Selection** (Claude, Cursor, OpenCode, or manual)
2. **Agency Setup** (Set your agency name and primary influencer niche)
3. **YouTube API** (Optional: Connect YouTube Data API v3 for the Scout agent)
4. **Workspace Generation** (Scaffolds the 75+ framework files)

### Automated Install (CI/CD or quick setup):
To install without the wizard, provide the tool flag and the `--skip-wizard` argument:
```bash
npx ima-agent . --tool claude --skip-wizard
```

### Supported AI Coding Assistants:
- **Claude Code (Anthropic):** Installs `CLAUDE.md` and custom slash commands
- **Cursor:** Installs highly optimized `.cursorrules`
- **OpenCode:** Installs `AGENTS.md` and custom slash commands
- **Generic:** Works with any tool that can read markdown reference files

## What You Get

- **8 AI agent personas** — Orchestrator, Guided Wizard, Scout, Brand Analyst, Campaign Strategist, Content Auditor, ROI Analyst, Outreach Manager
- **7 research workflows** — Discovery, vetting, brand audit, campaign planning, competitive analysis, outreach, performance reporting
- **Client-based organization** — Separate workspaces for each client with their own configs and outputs
- **Knowledge base** — Platform guides (Instagram, TikTok, YouTube, X, LinkedIn), engagement benchmarks, pricing guides, FTC compliance, and fraud detection
- **Output flexibility** — Export to Markdown, CSV, Notion, or Google Sheets

## Usage

After installation:

1. Edit `config.yaml` with your agency info
2. Open the folder in your AI coding tool
3. Tell your AI: *"Read AGENTS.md and start a session"*

Works with Claude Code, Cursor, OpenCode, Windsurf, GitHub Copilot, and any AI tool that reads markdown.

## Documentation

See [README.md](./template/README.md) in the installed template for full documentation.

## License

MIT
