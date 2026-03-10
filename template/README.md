# IMA Framework — Influencer Marketing Agent

> Transform any AI coding tool into a team of influencer marketing specialists.

## Quick Start

```bash
# Install the framework
npx ima-agent my-agency

# Navigate to the directory
cd my-agency
```

Then:
1. Edit `config.yaml` with your agency info
2. Open the folder in your AI coding tool (Claude Code, Cursor, OpenCode, etc.)
3. Tell your AI: *"Read AGENTS.md and start a session"*

## What This Is

IMA is an **agentic methodology framework** — like [BMAD](https://github.com/bmadcode/BMAD-METHOD) but for influencer marketing. It gives your AI coding tool structured personas, workflows, and knowledge to perform professional-grade influencer marketing research.

**No APIs required.** The AI uses web research, structured analysis, and your knowledge base to deliver results.

## How It Works

```
You: "Find me 20 micro influencers in sustainable fashion on Instagram"

IMA: Loads your config → Activates the Scout agent → Runs the discovery 
     workflow → Profiles each influencer → Scores and ranks them → 
     Delivers a formatted shortlist to your client folder
```

## Your Workspace

After installation, your folder looks like this:

```
my-agency/
├── config.yaml              # Agency-level settings
├── AGENTS.md                # Agent registry & all commands
├── .ima/                    # Framework core (agents, workflows, templates, knowledge)
│   ├── agents/              # 7 specialist AI personas
│   ├── workflows/           # 7 step-by-step research processes
│   ├── templates/           # 7 output templates
│   ├── knowledge-base/      # Platform guides, benchmarks, compliance
│   ├── checklists/          # Validation checklists
│   └── output-adapters/     # CSV, Notion, Google Sheets formatters
└── clients/                 # Client workspaces (organized automatically)
    ├── _template/           # Client config template
    ├── client-1/            # Each client gets their own folder
    └── client-2/
```

## Commands

| Command | Agent | What It Does |
|---------|-------|-------------|
| `/ima start` | Orchestrator | Start a new session |
| `/ima client add "Name"` | Orchestrator | Create a new client workspace |
| `/ima client switch "Name"` | Orchestrator | Switch to a different client |
| `/scout discover [criteria]` | Scout | Find influencers in any niche |
| `/brand audit [brand]` | Brand Analyst | Analyze a brand's positioning |
| `/campaign plan [brief]` | Strategist | Design a full campaign |
| `/audit full [handle]` | Auditor | Deep-vet an influencer |
| `/outreach draft [influencer]` | Outreach | Craft personalized outreach |
| `/roi analyze [data]` | ROI Analyst | Calculate campaign performance |

## Client Management

IMA organizes all research by client:

```bash
# Add a new client
/ima client add "Acme Skincare"

# Switch between clients
/ima client switch "Fitness Brand"

# List all clients
/ima client list
```

Each client gets their own folder with separate configs and organized outputs:
```
clients/acme-skincare/
├── config.yaml    # Client-specific niche, audience, budget
├── discovery/     # Influencer shortlists
├── audits/        # Vetting reports
├── campaigns/     # Campaign proposals
├── outreach/      # Outreach sequences
└── reports/       # Performance reports
```

## Works With Any AI Tool

IMA is tool-agnostic — it works with any AI that can read markdown files:
- **Claude Code** (Anthropic)
- **Cursor** (Anysphere)
- **OpenCode** (any LLM)
- **Windsurf** (Codeium)
- **GitHub Copilot**
- And more...

## What's Inside

| Component | Count | Description |
|-----------|:-----:|-------------|
| **Agent Personas** | 7 | Specialist AI roles with deep expertise |
| **Workflows** | 7 | Step-by-step research processes |
| **Templates** | 7 | Structured output formats |
| **Knowledge Base** | 8 | Platform guides, benchmarks, compliance |
| **Checklists** | 3 | Validation checklists |
| **Output Adapters** | 4 | CSV, Markdown, Notion, Google Sheets |

## License

MIT
