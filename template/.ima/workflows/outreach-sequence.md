---
name: Outreach Sequence
agent: /outreach
supporting_agents: [/scout, /campaign]
description: Design and execute personalized outreach sequences for influencer partnerships
---

# Workflow: Outreach Sequence

<overview>
Create personalized, multi-touch outreach sequences for a list of target influencers.
</overview>

<inputs>
- **Influencer shortlist** (from `/scout` or user-provided)
- **Campaign brief** (from `/campaign` or user-provided)
- **Brand info** (from config or `/brand`)
- **Compensation details** (rates, product, terms)
</inputs>

---

<phase name="Outreach Preparation">

### Step 1.1: Prioritize List
- **Priority 1**: Best fit, highest impact — reach out first
- **Priority 2**: Strong fit — reach out in wave 2
- **Priority 3**: Good fit, backups — reach out if capacity

### Step 1.2: Research Each Influencer
For each Priority 1 & 2 influencer:
- Recent content highlights (to reference in message)
- Personal interests or projects they've shared
- How they talk about brands (to match tone)
- Preferred contact method (email in bio, DM, management)
- Any mutual connections or shared brand partnerships

### Step 1.3: Prepare Assets
- Brand media kit or one-pager
- Product images or sample info
- Campaign brief summary (for attachment)
- Rate/compensation details

</phase>

<phase name="Message Crafting">

### Step 2.1: Personalized Initial Message
For each influencer, craft using `templates/outreach-email.md`:
- **Hook**: Specific reference to their content (not generic)
- **Introduction**: Who you are, brand introduction
- **Why them**: Specific reasons they're a great fit
- **The ask**: Clear, concise collaboration opportunity
- **Value proposition**: What's in it for them
- **CTA**: Next step (call, reply, check link)

### Step 2.2: Follow-Up Sequence

| Message | Timing | Approach |
|---------|--------|----------|
| Follow-Up 1 | Day 3-4 | Brief, friendly nudge |
| Follow-Up 2 | Day 7-8 | New angle, added value |
| Follow-Up 3 | Day 14 | Final friendly check-in |

### Step 2.3: Response Templates
Prepare response templates for:
- **Interested**: Rate discussion template
- **Questions**: FAQ responses
- **Negotiating**: Counter-offer framework
- **Declining**: Graceful close, keep door open
- **No response**: File for future re-approach

</phase>

<phase name="Negotiation Playbook">

### Step 3.1: Rate Benchmarks
Reference `knowledge-base/metrics/pricing-guides.md`:
- Set target rate range per influencer
- Prepare maximum budget per influencer
- Identify non-monetary value to offer

### Step 3.2: Deal Structure Options

| Model | Description | Best For |
|-------|-------------|----------|
| Flat fee | Fixed payment per deliverable | Most common |
| Performance-based | Base fee + commission/bonus | Conversion campaigns |
| Product-only | Free products for content | Nano influencers, genuine fans |
| Hybrid | Reduced cash + product + bonus | Budget flexibility |
| Long-term | Discounted per-post for multi-month | Ambassador programs |

### Step 3.3: Contract Terms Checklist
Reference `knowledge-base/compliance/ftc-guidelines.md`:
- [ ] Deliverables (quantity, format, platform)
- [ ] Timeline (creation window, posting dates)
- [ ] Content approval process and revision rounds
- [ ] Usage rights (organic, paid, duration)
- [ ] Exclusivity (category, duration)
- [ ] Payment terms (schedule, method)
- [ ] FTC disclosure requirements
- [ ] Cancellation terms

</phase>

<phase name="Deliverables">

### Step 4.1: Outreach Package
Per influencer: personalized initial message, follow-up sequence, rate negotiation range, key talking points, contact method and timing.

### Step 4.2: Tracking Sheet

| Influencer | Priority | Contact | Status | Sent Date | Next Action | Notes |
|-----------|----------|---------|--------|-----------|-------------|-------|
| | | | | | | |

### Step 4.3: Next Steps
- Send Priority 1 outreach
- Set follow-up reminders
- Track responses in tracker
- Report on response rates after each wave

</phase>
