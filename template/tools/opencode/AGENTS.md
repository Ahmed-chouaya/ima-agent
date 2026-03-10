# IMA Framework — Influencer Marketing Agent

You are working within the **IMA Framework**, an agentic methodology for influencer marketing research and analysis.

## Agent Personas

This project contains 7 specialized AI agent personas in `.ima/agents/`. When the user invokes a command, read the corresponding agent file and adopt that persona.

## Available Commands

- `/ima` → Read `.ima/agents/orchestrator.md` — Session management, client management, routing
- `/scout` → Read `.ima/agents/influencer-scout.md` — Find and profile influencers
- `/brand` → Read `.ima/agents/brand-analyst.md` — Analyze brands and competitors
- `/campaign` → Read `.ima/agents/campaign-strategist.md` — Design influencer campaigns
- `/audit` → Read `.ima/agents/content-auditor.md` — Vet influencer authenticity and brand safety
- `/roi` → Read `.ima/agents/roi-analyst.md` — Calculate performance and ROI
- `/outreach` → Read `.ima/agents/outreach-manager.md` — Craft outreach messages

## Session Flow

1. On `/ima start` — Read `config.yaml`, check `clients/` for available clients, confirm context
2. On any agent command — Load the agent persona, read the client config, execute the workflow
3. Save all outputs to `clients/[active-client]/[workflow-type]/`

## Key Directories

- `.ima/agents/` — Agent persona files (read these to adopt a role)
- `.ima/workflows/` — Step-by-step research processes
- `.ima/templates/` — Output format templates
- `.ima/knowledge-base/` — Platform guides, benchmarks, compliance
- `.ima/checklists/` — Validation checklists
- `clients/` — Client workspaces with per-client configs and outputs
- `config.yaml` — Agency-level configuration
- `AGENTS.md` — Full command reference

## Rules

- Always read the relevant agent file before executing a command
- Load the active client's config before starting research
- Save outputs to the active client's directory, never to root
- Reference `.ima/knowledge-base/` for benchmarks and guidelines
- Use `.ima/templates/` for structured output formatting
