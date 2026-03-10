---
name: Brand Audit
agent: /brand
supporting_agents: [/scout, /campaign]
description: Comprehensive brand analysis workflow for understanding positioning, competitors, and influencer opportunity
---

# Workflow: Brand Audit

<overview>
Full brand analysis pipeline to understand a brand's positioning, competitive landscape, and influencer marketing opportunities.
</overview>

<prerequisites>
- Brand name, website URL, or social media handles
- Industry/niche context (from config or user input)
</prerequisites>

<inputs>
- **Brand identifier** (name, website, social handles)
- **Analysis scope** (full audit / positioning only / competitors only)
- **Competitor names** (optional — will discover if not provided)
</inputs>

---

<phase name="Brand Identity Analysis">

### Step 1.1: Website & Digital Presence
Research the brand's online presence:
- Website messaging, value proposition, target market signals
- Product/service lineup and pricing tier
- Blog/content marketing approach
- SEO positioning (what they rank for)

### Step 1.2: Social Media Audit
For each active platform:
- Follower count and growth
- Content strategy (themes, formats, frequency)
- Engagement rates
- Community engagement (response to comments, UGC resharing)
- Bio and profile optimization

### Step 1.3: Brand Voice & Identity
Define the brand's personality:
- Tone of voice (formal / casual / playful / authoritative)
- Visual aesthetic (color palette, photography style, design)
- Key messages and positioning statements
- Brand values and mission

### Step 1.4: Current Influencer Activity
Map existing influencer relationships:
- Active brand ambassadors or partners
- Recent sponsored posts (search brand mentions, #ad tags)
- Affiliate programs
- UGC campaigns
- Employee advocacy

**Output:** Brand identity snapshot using `templates/brand-brief.md`

</phase>

<phase name="Competitor Landscape">

### Step 2.1: Identify Competitors
If not provided, identify 3-5 competitors:
- Direct competitors (same product category)
- Indirect competitors (competing for same audience)
- Aspirational competitors (where the brand wants to be)

### Step 2.2: Competitor Influencer Analysis
For each competitor:
- Which influencers do they work with?
- What tiers (nano/micro/macro)?
- What platforms?
- What types of content (reviews, unboxings, lifestyle)?
- Estimated frequency and investment level

### Step 2.3: Competitive Positioning Map

| Dimension | [Brand] | Competitor 1 | Competitor 2 | Competitor 3 |
|-----------|---------|-------------|-------------|-------------|
| Influencer Activity Level | | | | |
| Primary Platform | | | | |
| Influencer Tier Focus | | | | |
| Content Strategy | | | | |
| Estimated Monthly Spend | | | | |
| Unique Angle | | | | |

</phase>

<phase name="Audience Analysis">

### Step 3.1: Target Audience Profile
- Demographics (age, gender, location, income)
- Psychographics (interests, values, lifestyle, aspirations)
- Online behavior (platforms, content preferences, purchase triggers)
- Pain points and needs the brand solves

### Step 3.2: Audience-Influencer Alignment
- Content categories they engage with
- Influencer tiers they trust most
- Platform preferences
- Content format preferences (video, photos, long-form)

</phase>

<phase name="Opportunity Analysis">

### Step 4.1: Gap Identification
- Untapped platforms (where competitors aren't active)
- Underserved influencer tiers
- Content format gaps
- Audience segments not being targeted
- Seasonal or trending opportunities

### Step 4.2: Strategic Recommendations
- Recommended influencer marketing strategy
- Platform priority ranking
- Suggested influencer tiers and mix
- Content strategy recommendations
- Budget range recommendations (reference `knowledge-base/metrics/pricing-guides.md`)
- Quick-win opportunities vs. long-term plays

</phase>

<phase name="Deliverables">

### Step 5.1: Brand Audit Report
Compile using `templates/brand-brief.md`:
- Executive summary
- Brand identity snapshot
- Competitive landscape map
- Audience profile
- Current influencer activity assessment
- Opportunity analysis
- Strategic recommendations

### Step 5.2: Recommend Next Steps
- **Find influencers**: Hand off criteria to `/scout`
- **Plan campaign**: Hand off brief to `/campaign`
- **Competitive deep-dive**: Run `competitive-analysis` workflow for specific competitors

</phase>
