# Task: IMA Help

## ROUTING RULES

- **Empty `phase` = anytime** — Universal tools work regardless of workflow state
- **Numbered phases indicate sequence** — Phases like `1-setup` → `2-research` → `3-discovery` → `4-vetting` → `5-planning` → `6-outreach` → `7-analysis` flow in order
- **Phase with no Required Steps** — If an entire phase has no required items, the entire phase is optional. If it is sequentially before another phase, it can be recommended, but always be clear about what the true next required item is.
- **Stay in module** — Guide through the active module's workflow based on phase+sequence ordering
- **Descriptions contain routing** — Read for alternate paths (e.g., "back to previous if fixes needed")
- **`required=true` blocks progress** — Required workflows must complete before proceeding to later phases
- **Artifacts reveal completion** — Search resolved output paths for `outputs` patterns, fuzzy-match found files to workflow rows

## DISPLAY RULES

### Command-Based Workflows
When `command` field has a value:
- Show the command as a skill name in backticks (e.g., `ima-scout-discover`)

### Agent-Based Workflows
When `command` field is empty:
- User loads agent first by invoking the agent skill (e.g., `ima-scout`)
- Then invokes by referencing the `code` field or describing the `name` field
- Do NOT show a slash command — show the code value and agent load instruction instead

Example presentation for empty command:
```
Scout Discover (SD)
Load: scout agent skill, then ask to "SD" or "discover influencers for [criteria]"
Agent: 🔍 Younes (Scout)
Description: Run a full discovery pipeline based on given criteria
```

## MODULE DETECTION

- **Empty `module` column** → universal tools (work across all modules)
- **Named `module`** → module-specific workflows

Detect the active module from conversation context, recent workflows, or user query keywords. If ambiguous, ask the user.

## INPUT ANALYSIS

Determine what was just completed:
- Explicit completion stated by user
- Workflow completed in current conversation
- Artifacts found matching `outputs` patterns
- If `index.md` exists, read it for additional context
- If still unclear, ask: "What workflow did you most recently complete?"

## EXECUTION

1. **Load catalog** — Load `{project-root}/.ima/tasks/ima-help/ima-help.csv`

2. **Resolve output locations and config** — Scan each folder under `{project-root}/.ima/` (except `_config` and `tasks`) for `config.yaml`. For each workflow row, resolve its `output-location` variables against that module's config so artifact paths can be searched.

3. **Ground in project knowledge** — If project knowledge paths resolve to existing files, read available documentation (brand briefs, campaign proposals, influencer profiles) for grounding context. Use discovered project facts when composing output. Never fabricate project-specific details.

4. **Detect active module** — Use MODULE DETECTION above

5. **Analyze input** — Task may provide a workflow name/code, conversational phrase, or nothing. Infer what was just completed using INPUT ANALYSIS above.

6. **Present recommendations** — Show next steps based on:
   - Completed workflows detected
   - Phase/sequence ordering (ROUTING RULES)
   - Artifact presence
   
   **Optional items first** — List optional workflows until a required step is reached
   **Required items next** — List the next required workflow
   
   For each item, apply DISPLAY RULES above and include:
   - Workflow **name**
   - **Command** OR **Code + Agent load instruction** (per DISPLAY RULES)
   - **Agent** title and display name from the CSV (e.g., "🔍 Younes (Scout)")
   - Brief **description**

7. **Additional guidance to convey**:
   - Run each workflow in a **fresh context window** when possible
   - For conversational requests: match the user's tone while presenting clearly

8. Return to the calling process after presenting recommendations.
