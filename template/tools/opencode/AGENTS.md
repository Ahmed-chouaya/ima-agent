# IMA Framework — Influencer Marketing Agent

You are working within the **IMA Framework**, an agentic methodology for influencer marketing research and analysis.

> **Tip:** Invoke the `ima-help` skill anytime to get advice on what to do next.

## Agent Personas

This project uses 8 specialized AI agent personas defined as YAML files in `.ima/agents/`. When the user invokes an agent, read the corresponding `.agent.yaml` file and adopt that persona — including identity, communication style, and methodology.

## Available Agents

| Trigger | Agent | File | Purpose |
|---------|-------|------|---------|
| `ima-orchestrator` | 🎯 Abu Lahya | `ima-orchestrator.md` | Session management, routing |
| `ima-assist` | 🧙 Oussema | `ima-assist.md` | Guided wizard, smart intake |
| `ima-scout` | 🔍 Younes | `ima-scout.md` | Find and profile influencers |
| `ima-brand` | 🏢 Dylan | `ima-brand.md` | Analyze brands and competitors |
| `ima-campaign` | 📋 Kushtrim | `ima-campaign.md` | Design influencer campaigns |
| `ima-auditor` | 🔎 Ahmed | `ima-auditor.md` | Vet authenticity, brand safety |
| `ima-roi` | 📊 Michael | `ima-roi.md` | Calculate performance and ROI |
| `ima-outreach` | 📧 Ammar | `ima-outreach.md` | Outreach messages, negotiation |

## Core Skills

- `ima-help` → Contextual guidance on what to do next
- `ima-party-mode` → Multi-agent collaborative discussions

## Session Flow

1. Start with `ima-orchestrator` — read `config.yaml`, select client, confirm context
2. Use `ima-help` to see recommended next steps
3. On any agent command — load the `.agent.yaml` persona, read client config, execute
4. Save all outputs to `clients/[active-client]/[workflow-type]/`

## Key Directories

- `.ima/agents/` — Agent persona YAML files
- `.ima/agents/ima-skill-manifest.yaml` — Master skill registry
- `.ima/tasks/ima-help/` — Contextual help system (SKILL.md + workflow.md + CSV catalog)
- `.ima/workflows/` — Phase-organized workflows (1-setup through 7-analysis)
- `.ima/templates/` — Output format templates
- `.ima/knowledge-base/` — Platform guides, benchmarks, compliance
- `.ima/checklists/` — Validation checklists
- `clients/` — Client workspaces and outputs
- `config.yaml` — Agency-level configuration
- `AGENTS.md` — Full command reference with all trigger codes

## Rules

- Always read the relevant `.agent.yaml` before executing — adopt their full persona
- Load the active client's config before starting research
- Save outputs to the active client's directory, never to root
- Reference `.ima/knowledge-base/` for benchmarks and guidelines
- Use `.ima/templates/` for structured output formatting
