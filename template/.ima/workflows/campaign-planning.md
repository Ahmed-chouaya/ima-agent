---
name: Campaign Planning
agent: /campaign
supporting_agents: [/scout, /brand, /roi]
description: End-to-end influencer campaign design from objectives to execution plan
---

# Workflow: Campaign Planning

<overview>
Full campaign planning pipeline from objectives through to execution-ready plan.
</overview>

<prerequisites>
- Brand brief (from `/brand audit` or user input)
- Influencer shortlist (from `/scout discover` or to be created)
- Budget range (from config or user input)
</prerequisites>

<inputs>
- **Brand/product** being promoted
- **Campaign objective** (awareness, engagement, traffic, conversions)
- **Budget** (total campaign budget)
- **Timeline** (campaign duration and key dates)
- **Influencer shortlist** (optional — can be created during workflow)
</inputs>

---

<phase name="Campaign Strategy">

### Step 1.1: Define Objectives
Set 1-2 primary objectives with SMART goals:
- **Specific**: What exactly do you want to achieve?
- **Measurable**: What KPIs will you track?
- **Achievable**: Is this realistic given the budget?
- **Relevant**: Does this align with business goals?
- **Time-bound**: What's the campaign timeline?

### Step 1.2: Audience Targeting
- Primary audience segment
- Secondary audience segment
- Key audience behaviors to target
- Platform behavior patterns

### Step 1.3: Platform Strategy

| Objective | Best Platforms | Why |
|-----------|---------------|-----|
| Awareness | Instagram, TikTok, YouTube | Highest reach potential |
| Engagement | TikTok, Instagram | Highest interaction rates |
| Traffic | Instagram, YouTube | Link-friendly formats |
| Conversions | Instagram, YouTube, TikTok | Shopping features + trust |
| UGC Generation | TikTok, Instagram | Shareable formats |

</phase>

<phase name="Influencer Strategy">

### Step 2.1: Tier Mix Design

| Model | Nano | Micro | Mid-tier | Macro | Best For |
|-------|:----:|:-----:|:--------:|:-----:|----------|
| Volume Play | 60% | 30% | 10% | 0% | Engagement, UGC |
| Balanced | 20% | 40% | 30% | 10% | Awareness + Engagement |
| Anchor + Support | 0% | 30% | 20% | 50% | Awareness, Credibility |
| All Micro | 0% | 100% | 0% | 0% | Targeted conversions |

### Step 2.2: Selection Criteria
**Must-Have:** Niche alignment, minimum ER, audience demographics, content quality, no competitor conflicts.
**Nice-to-Have:** Previous brand experience, multi-platform presence, specific format expertise.

### Step 2.3: Influencer Selection
If shortlist not provided, request handoff to `/scout`.

</phase>

<phase name="Creative Brief">

### Step 3.1: Campaign Concept
- Campaign name/theme
- Core message (1-2 sentences)
- Key messaging pillars (3-5 points)
- Emotional tone and style
- Unique hook or angle

### Step 3.2: Content Requirements

| Deliverable | Platform | Format | Duration/Length | Quantity |
|------------|----------|--------|-----------------|----------|
| | | | | |

### Step 3.3: Creative Guidelines
- **Mandatory**: Brand tags, hashtags, disclosure, product visibility, key message
- **Guidelines**: Tone, visual style, talking points
- **Creator Freedom**: Storytelling approach, personal angle, filming style
- **Restrictions**: List of things to avoid

### Step 3.4: Content Calendar
Map out the publishing schedule with creation window, review dates, and staggered launch.

</phase>

<phase name="Budget & Compensation">

### Step 4.1: Budget Breakdown
Reference `knowledge-base/metrics/pricing-guides.md`:

| Category | % of Budget | Amount |
|----------|:-----------:|--------|
| Influencer Fees | 60-70% | |
| Product/Gifting | 5-10% | |
| Paid Amplification | 10-20% | |
| Production Support | 5-10% | |
| Contingency | 10% | |

### Step 4.2: Compensation per Influencer
Base fee, product/gifting value, performance bonus structure, usage rights fee.

### Step 4.3: ROI Projection
Hand off to `/roi` for pre-campaign forecasting.

</phase>

<phase name="Execution Plan">

### Step 5.1: Timeline

| Week | Activity | Owner | Deliverables |
|------|----------|-------|-------------|
| 1 | Outreach & contracting | Outreach Manager | Signed agreements |
| 2 | Product seeding & briefing | Brand | Products shipped, brief sent |
| 3-4 | Content creation | Influencers | Draft content for review |
| 5 | Review & approval | Brand | Approved content |
| 5-7 | Publishing window | Influencers | Live content |
| 7-8 | Monitoring & boosting | Campaign Manager | Performance data |
| 9 | Performance reporting | ROI Analyst | Campaign report |

### Step 5.2: Risk Mitigation
- Influencer drops out → Backup list ready
- Content doesn't meet standards → Revision rounds in contract
- Underperformance → Paid boost budget available
- Negative publicity → Crisis communication plan
- FTC compliance → Disclosure verified before posting

</phase>

<phase name="Deliverables">

### Step 6.1: Campaign Proposal
Compile using `templates/campaign-proposal.md`.

### Step 6.2: Action Items
- [ ] Finalize influencer selection
- [ ] Begin outreach (hand off to `/outreach`)
- [ ] Prepare product for seeding
- [ ] Set up tracking (UTMs, promo codes)
- [ ] Schedule check-in points

</phase>
