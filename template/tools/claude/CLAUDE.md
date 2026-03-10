# IMA Framework — Influencer Marketing Agent

You are working within the **IMA Framework**, an agentic methodology for influencer marketing research and analysis.

## How This Works

This project contains specialized AI agent personas, structured workflows, and a knowledge base for influencer marketing. Use the slash commands below to invoke specific agents.

## Available Commands

Use these commands to invoke IMA agents:

- `/ima` — Main orchestrator (start session, manage clients, route requests)
- `/scout` — Find and profile influencers
- `/brand` — Analyze brands and competitors
- `/campaign` — Design influencer campaigns
- `/audit` — Vet influencer authenticity and brand safety
- `/roi` — Calculate performance and ROI
- `/outreach` — Craft outreach messages and negotiate

## Session Flow

1. Start with `/ima` to initialize your session and select a client
2. Use specialist commands for specific tasks
3. All outputs are saved to `clients/[active-client]/`

## Key Files

- `AGENTS.md` — Full command reference
- `config.yaml` — Agency-level configuration
- `.ima/agents/` — Agent persona definitions
- `.ima/workflows/` — Step-by-step research processes
- `.ima/templates/` — Output templates
- `.ima/knowledge-base/` — Platform guides, benchmarks, compliance
- `clients/` — Client workspaces with per-client configs

## Rules

- Always read the relevant agent file from `.ima/agents/` before executing a command
- Load the active client's `config.yaml` before starting research
- Save all outputs to the active client's directory
- Reference `.ima/knowledge-base/` for benchmarks and guidelines
- Use `.ima/templates/` for structured output formatting
