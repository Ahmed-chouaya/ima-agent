# IMA Agent Registry

> Invoke the `ima-help` skill anytime to get advice on what to do next.

## The IMA Team

| Agent | Skill ID | Name | Triggers | Primary Workflows |
|-------|----------|------|----------|-------------------|
| 🎯 Orchestrator | `ima-orchestrator` | Abu Lahya | `ST`, `CA`, `CS`, `CL`, `EX`, `HO` | Start Session, Client Management, Routing, Export |
| 🧙 Guided Wizard | `ima-assist` | Oussema | `AS`, `AR`, `AM`, `AX`, `AE` | Guided Wizard, Smart Intake, Progress Tracking |
| 🔍 Scout | `ima-scout` | Younes | `SD`, `SP`, `SC`, `SE`, `ST` | Discover, Profile, Compare, Expand, Trending |
| 🏢 Brand Analyst | `ima-brand` | Dylan | `BA`, `BC`, `BD`, `BF`, `BB` | Brand Audit, Competitors, Audience, Fit, Compare |
| 📋 Campaign | `ima-campaign` | Kushtrim | `CP`, `CB`, `CG`, `CC`, `CM` | Campaign Plan, Brief, Budget, Calendar, Match |
| 🔎 Auditor | `ima-auditor` | Ahmed | `AF`, `AC`, `AA`, `AS`, `AB` | Full Audit, Content, Authenticity, Safety, Batch |
| 📊 ROI Analyst | `ima-roi` | Michael | `RF`, `RA`, `RC`, `RB`, `RO` | Forecast, Analyze, Compare, Benchmark, Optimize |
| 📧 Outreach | `ima-outreach` | Ammar | `OS`, `OD`, `ON`, `OF`, `OT` | Sequence, Draft, Negotiate, Follow-up, Template |

## Core Skills

| Skill | ID | Trigger | Description |
|-------|-----|---------|-------------|
| 🆘 IMA Help | `ima-help` | `IH` | Contextual guidance — what to do next |
| 🎭 Party Mode | `ima-party-mode` | `PM` | Multi-agent collaborative discussions |

## Workflow Phases

IMA follows the influencer marketing lifecycle:

```
1-setup      → Session init, client creation
2-research   → Brand audit, competitor analysis, audience research
3-discovery  → Influencer search, profiling, shortlisting
4-vetting    → Content quality, authenticity, brand safety
5-planning   → Campaign design, briefs, budgets, calendars
6-outreach   → Outreach sequences, negotiation, follow-ups
7-analysis   → ROI forecasting, performance reports, optimization
```

## Quick Reference — All Trigger Codes

### Setup (Phase 1)
| Code | Command | Agent |
|------|---------|-------|
| `ST` | Start Session | 🎯 Abu Lahya | `/ima-orchestrator start` |
| `CA` | Client Add | 🎯 Abu Lahya | `/ima-orchestrator client add` |
| `CS` | Client Switch | 🎯 Abu Lahya | `/ima-orchestrator client switch` |
| `CL` | Client List | 🎯 Abu Lahya | `/ima-orchestrator client list` |

### Research (Phase 2)
| Code | Command | Agent |
|------|---------|-------|
| `BD` | Brand Audience Deep-dive | 🏢 Dylan |
| `BF` | Brand Fit | 🏢 Dylan |

### Discovery (Phase 3)
| Code | Command | Agent |
|------|---------|-------|
| `SD` | Scout Discover | 🔍 Younes |
| `SP` | Scout Profile | 🔍 Younes |
| `SC` | Scout Compare | 🔍 Younes |
| `SE` | Scout Expand | 🔍 Younes |
| `SN` | Scout Trending | 🔍 Younes |

### Vetting (Phase 4)
| Code | Command | Agent |
|------|---------|-------|
| `AF` | Audit Full | 🔎 Ahmed |
| `AC` | Audit Content | 🔎 Ahmed |
| `AA` | Audit Authenticity | 🔎 Ahmed |
| `AY` | Audit Safety | 🔎 Ahmed |
| `AB` | Audit Batch | 🔎 Ahmed |

### Planning (Phase 5)
| Code | Command | Agent |
|------|---------|-------|
| `CP` | Campaign Plan | 📋 Kushtrim |
| `CB` | Campaign Brief | 📋 Kushtrim |
| `CG` | Campaign Budget | 📋 Kushtrim |
| `CK` | Campaign Calendar | 📋 Kushtrim |
| `CM` | Campaign Match | 📋 Kushtrim |

### Outreach (Phase 6)
| Code | Command | Agent |
|------|---------|-------|
| `OS` | Outreach Sequence | 📧 Ammar |
| `OD` | Outreach Draft | 📧 Ammar |
| `ON` | Outreach Negotiate | 📧 Ammar |
| `OF` | Outreach Follow-up | 📧 Ammar |
| `OT` | Outreach Template | 📧 Ammar |

### Analysis (Phase 7)
| Code | Command | Agent |
|------|---------|-------|
| `RF` | ROI Forecast | 📊 Michael |
| `RA` | ROI Analyze | 📊 Michael |
| `RC` | ROI Compare | 📊 Michael |
| `RB` | ROI Benchmark | 📊 Michael |
| `RO` | ROI Optimize | 📊 Michael |

### Anytime
| Code | Command | Agent |
|------|---------|-------|
| `IH` | IMA Help | — |
| `AS` | Guided Wizard | 🧙 Oussema |
| `PM` | Party Mode | — |
| `EX` | Export | 🎯 Abu Lahya |
| `HO` | Handoff | 🎯 Abu Lahya |
| `BB` | Brand Compare | 🏢 Dylan |

## File Structure

```
.ima/
├── agents/                    # Agent persona definitions (YAML)
│   ├── orchestrator.agent.yaml   # 🎯 Abu Lahya
│   ├── assist.agent.yaml         # 🧙 Oussema
│   ├── scout.agent.yaml          # 🔍 Younes
│   ├── brand.agent.yaml          # 🏢 Dylan
│   ├── campaign.agent.yaml       # 📋 Kushtrim
│   ├── auditor.agent.yaml        # 🔎 Ahmed
│   ├── roi.agent.yaml            # 📊 Michael
│   ├── outreach.agent.yaml       # 📧 Ammar
│   └── ima-skill-manifest.yaml   # Master skill registry
├── tasks/                     # Standalone skills
│   └── ima-help/              # Contextual help system
│       ├── SKILL.md
│       ├── workflow.md
│       └── ima-help.csv
├── workflows/                 # Phase-organized workflows
│   ├── 1-setup/
│   ├── 2-research/
│   ├── 3-discovery/
│   ├── 4-vetting/
│   ├── 5-planning/
│   ├── 6-outreach/
│   ├── 7-analysis/
│   └── party-mode/
├── templates/                 # Output templates
├── checklists/                # Vetting and safety checklists
├── knowledge-base/            # Reference data
│   ├── platforms/
│   ├── metrics/
│   └── compliance/
└── output-adapters/           # Obsidian, Notion, Markdown adapters
```
## Automated Progress Tracking

IMA automatically tracks your research progress in `progress.yaml` within each client directory.

- **Initialization**: `ima-orchestrator` (Abu Lahya) creates or loads this file whenever a session starts.
- **Auto-Updates**: Every specialist agent is mandated to update `progress.yaml` immediately after completing a workflow or generating an artifact.
- **Visibility**: Use `ima-help` or `ima-assist` to see a summary of your current progress and recommended next steps based on this file.
