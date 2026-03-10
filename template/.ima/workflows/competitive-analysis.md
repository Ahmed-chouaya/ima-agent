---
name: Competitive Analysis
agent: /brand
supporting_agents: [/scout]
description: Analyze competitors' influencer marketing strategies and identify opportunities
---

# Workflow: Competitive Analysis

<overview>
Research and analyze how competitors use influencer marketing, identify gaps, and find opportunities.
</overview>

<inputs>
- **Your brand** (from config or user input)
- **Competitor names** (3-5, or will be discovered)
- **Platforms to analyze** (from config)
</inputs>

---

<phase name="Competitor Identification">

### Step 1.1: Map Competitors
Identify three types:
- **Direct**: Same product/service, same market
- **Indirect**: Different product, same audience
- **Aspirational**: Where you want to be

### Step 1.2: Prioritize
Pick 3-5 competitors based on market relevance, active influencer presence, and similar target audience.

</phase>

<phase name="Competitor Influencer Audit">

For each competitor, research:

### Step 2.1: Partnership Mapping
- Which influencers work with them?
- What tiers (nano/micro/mid/macro/mega)?
- Which platforms?
- Long-term ambassadors vs. one-off partnerships?

### Step 2.2: Content Strategy
- What types of sponsored content? (reviews, tutorials, lifestyle, UGC)
- What formats? (Reels, Stories, TikToks, YouTube videos)
- Content themes and messaging patterns
- How much creative freedom do influencers seem to have?

### Step 2.3: Estimated Investment
Estimate based on partnership count, tier distribution, content volume, and paid amplification (reference `knowledge-base/metrics/pricing-guides.md`).

</phase>

<phase name="Comparative Analysis">

### Step 3.1: Strategy Comparison Matrix

| Dimension | Your Brand | Comp 1 | Comp 2 | Comp 3 |
|-----------|-----------|--------|--------|--------|
| Active Platforms | | | | |
| Influencer Tiers | | | | |
| Content Types | | | | |
| Posting Frequency | | | | |
| Est. Monthly Spend | | | | |
| Ambassador Program | | | | |
| UGC Strategy | | | | |
| Unique Approach | | | | |

### Step 3.2: Shared Influencer Map
- High-demand creators working with multiple competitors = proven niche relevance
- Consider if they'd switch or add your brand
- Flag exclusivity risks

</phase>

<phase name="Opportunity Analysis">

### Step 4.1: Gap Identification
- **Platform gaps**: Platforms where no competitor is active
- **Tier gaps**: Influencer tiers being ignored
- **Content gaps**: Content formats nobody is using
- **Audience gaps**: Audience segments not targeted
- **Trend gaps**: Emerging trends not being leveraged

### Step 4.2: Strategic Recommendations
- Differentiation opportunities
- Quick wins (easy-to-access gaps)
- Long-term strategic plays
- Influencers to target (available, not exclusive to competitors)
- Budget recommendations relative to competitors

</phase>

<phase name="Deliverables">
- Competitive analysis report with comparison matrix
- Shared influencer map
- Gap analysis with prioritized opportunities
- Actionable recommendations
- Hand off opportunities to `/scout` for influencer discovery
</phase>
