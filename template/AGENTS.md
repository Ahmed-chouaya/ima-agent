# IMA Agent Registry

> All available agents and their commands. Tell your AI to read this file to get started.

## Quick Start

```
/ima start                    — Initialize a session, select a client
/ima client add "Client Name" — Create a new client workspace
```

---

## Agents

| Agent | Command | Role |
|-------|---------|------|
| 🎯 **Orchestrator** | `/ima` | Main coordinator — routes requests, manages clients |
| 🔍 **Influencer Scout** | `/scout` | Discovers and profiles influencers |
| 🏢 **Brand Analyst** | `/brand` | Analyzes brands, competitors, and audiences |
| 📋 **Campaign Strategist** | `/campaign` | Designs end-to-end campaigns |
| 🔎 **Content Auditor** | `/audit` | Evaluates content quality and brand safety |
| 📊 **ROI Analyst** | `/roi` | Calculates performance and ROI metrics |
| 📧 **Outreach Manager** | `/outreach` | Crafts personalized outreach messaging |

---

## All Commands

### Orchestrator (`/ima`)
| Command | Description |
|---------|-------------|
| `/ima start` | Start a new research session |
| `/ima client add [name]` | Create a new client workspace |
| `/ima client switch [name]` | Switch to a different client |
| `/ima client list` | List all client workspaces |
| `/ima niche [niche]` | Switch niche mid-session |
| `/ima status` | Show current session status |
| `/ima export [format]` | Export outputs (csv, markdown, notion, google-sheets) |
| `/ima route [request]` | Route a free-text request to the best agent |
| `/ima handoff [agent]` | Hand off research context to another agent |

### Influencer Scout (`/scout`)
| Command | Description |
|---------|-------------|
| `/scout discover [criteria]` | Full discovery pipeline |
| `/scout profile [handle]` | Detailed profile for one influencer |
| `/scout compare [handles...]` | Side-by-side comparison |
| `/scout expand [handle]` | Find similar influencers |
| `/scout trending [niche]` | Find rising creators |

### Brand Analyst (`/brand`)
| Command | Description |
|---------|-------------|
| `/brand audit [brand]` | Full brand analysis |
| `/brand competitors [brand]` | Competitive landscape mapping |
| `/brand audience [brand]` | Target audience deep-dive |
| `/brand fit [brand]` | Define ideal influencer profile |
| `/brand compare [brand1] [brand2]` | Compare two brands |

### Campaign Strategist (`/campaign`)
| Command | Description |
|---------|-------------|
| `/campaign plan [brief]` | Design a full campaign |
| `/campaign brief [name]` | Generate a creative brief |
| `/campaign budget [amount]` | Optimized budget allocation |
| `/campaign calendar [dates]` | Content calendar |
| `/campaign match [brief + list]` | Match influencers to campaign |

### Content Auditor (`/audit`)
| Command | Description |
|---------|-------------|
| `/audit full [handle]` | Complete audit (quality + auth + safety) |
| `/audit content [handle]` | Content quality only |
| `/audit authenticity [handle]` | Engagement authenticity check |
| `/audit safety [handle]` | Brand safety assessment |
| `/audit batch [handles...]` | Quick audit of multiple influencers |

### ROI Analyst (`/roi`)
| Command | Description |
|---------|-------------|
| `/roi forecast [details]` | Pre-campaign ROI projection |
| `/roi analyze [data]` | Post-campaign performance analysis |
| `/roi compare [influencers]` | Compare influencer ROI |
| `/roi benchmark [metrics]` | Benchmark against industry |
| `/roi optimize [data]` | Budget optimization recommendations |

### Outreach Manager (`/outreach`)
| Command | Description |
|---------|-------------|
| `/outreach sequence [list]` | Full outreach sequence for a list |
| `/outreach draft [handle]` | Personalized message for one influencer |
| `/outreach negotiate [scenario]` | Negotiation advice |
| `/outreach follow-up [handle]` | Draft a follow-up message |
| `/outreach template [type]` | Generate a reusable template |

---

## Capability Matrix

| Task | Primary Agent | Supporting | Workflow |
|------|:----:|:----:|----------|
| Find influencers | `/scout` | `/audit` | `discover-influencers` |
| Vet an influencer | `/audit` | `/scout` | `vet-influencer` |
| Analyze a brand | `/brand` | `/scout` | `brand-audit` |
| Plan a campaign | `/campaign` | `/brand`, `/roi` | `campaign-planning` |
| Competitive intel | `/brand` | `/scout` | `competitive-analysis` |
| Draft outreach | `/outreach` | `/scout` | `outreach-sequence` |
| Analyze ROI | `/roi` | `/audit` | `performance-report` |

---

## File Structure

```
.ima/
├── agents/          # Agent persona files (read by AI)
├── workflows/       # Step-by-step research processes
├── templates/       # Output templates
├── knowledge-base/  # Platform guides, benchmarks, compliance
├── checklists/      # Validation checklists
└── output-adapters/ # CSV, Notion, Sheets, Markdown formatters

clients/
├── _template/       # Client config template
└── [client-name]/   # Each client's workspace
    ├── config.yaml  # Client-specific settings
    ├── discovery/   # Influencer shortlists
    ├── audits/      # Vetting reports
    ├── campaigns/   # Campaign proposals
    ├── outreach/    # Outreach sequences
    └── reports/     # Performance reports
```
