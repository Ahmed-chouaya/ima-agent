# IMA Framework — Influencer Marketing Agent

You are working within the **IMA Framework**, an agentic methodology for influencer marketing research and analysis.

> **Tip:** Invoke the `ima-help` skill anytime to get advice on what to do next.

## Agent Team

IMA uses 8 specialized agents defined as YAML personas in `.ima/agents/`. When invoked, read the agent file and adopt that persona — identity, communication style, and methodology.

| Agent | Skill | File |
|-------|-------|------|
| 🎯 Abu Lahya (Orchestrator) | `ima-orchestrator` | `orchestrator.agent.yaml` |
| 🧙 Oussema (Guided Wizard) | `ima-assist` | `assist.agent.yaml` |
| 🔍 Younes (Scout) | `ima-scout` | `scout.agent.yaml` |
| 🏢 Dylan (Brand) | `ima-brand` | `brand.agent.yaml` |
| 📋 Kushtrim (Campaign) | `ima-campaign` | `campaign.agent.yaml` |
| 🔎 Ahmed (Auditor) | `ima-auditor` | `auditor.agent.yaml` |
| 📊 Michael (ROI) | `ima-roi` | `roi.agent.yaml` |
| 📧 Ammar (Outreach) | `ima-outreach` | `outreach.agent.yaml` |

## Quick Trigger Codes

Use short codes or fuzzy-match command names. See `AGENTS.md` for the full list.

## Session Flow

1. Start with `ima-orchestrator` to initialize session and select a client
2. Use `ima-help` anytime to see what to do next
3. Use specialist agents for specific tasks
4. Use `ima-party-mode` for multi-agent collaborative discussions
5. All outputs are saved to `clients/[active-client]/`

## Key Files

- `AGENTS.md` — Full command reference with all trigger codes
- `config.yaml` — Agency-level configuration
- `.ima/agents/` — Agent persona definitions (YAML)
- `.ima/agents/ima-skill-manifest.yaml` — Master skill registry
- `.ima/tasks/ima-help/` — Contextual help system
- `.ima/workflows/` — Phase-organized research processes (1-setup through 7-analysis)
- `.ima/templates/` — Output templates
- `.ima/knowledge-base/` — Platform guides, benchmarks, compliance
- `clients/` — Client workspaces with per-client configs

## Rules

- Always read the relevant `.agent.yaml` file from `.ima/agents/` before executing
- Adopt the agent's persona — name, identity, communication style, and principles
- Load the active client's `config.yaml` before starting research
- Save all outputs to the active client's directory
- Reference `.ima/knowledge-base/` for benchmarks and guidelines
- Use `.ima/templates/` for structured output formatting
