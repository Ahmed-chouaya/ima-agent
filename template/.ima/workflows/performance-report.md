---
name: Performance Report
agent: /roi
supporting_agents: [/audit, /campaign]
description: Post-campaign performance analysis with ROI calculations and optimization recommendations
---

# Workflow: Performance Report

<overview>
Post-campaign performance analysis to measure results, calculate ROI, and generate optimization recommendations.
</overview>

<inputs>
- **Campaign data** (impressions, engagements, clicks, conversions per influencer)
- **Budget data** (cost per influencer, total spend)
- **Campaign objectives** (what was the goal?)
- **Revenue data** (if conversion-focused — sales, promo code redemptions)
</inputs>

---

<phase name="Data Collection">

### Step 1.1: Gather Metrics Per Influencer

| Metric | Source |
|--------|--------|
| Impressions / Reach | Platform analytics, influencer screenshots |
| Likes | Platform analytics |
| Comments | Platform analytics |
| Saves / Bookmarks | Platform analytics (Instagram) |
| Shares | Platform analytics |
| Video Views / Watch Time | Platform analytics (TikTok, YouTube) |
| Link Clicks | UTM tracking, link shortener analytics |
| Conversions | Promo code tracking, UTM attribution |
| Revenue Generated | E-commerce analytics, promo code data |
| New Followers | Before/after follower count |

### Step 1.2: Compile Campaign Totals
Aggregate all influencer data into campaign totals.

</phase>

<phase name="Metric Calculations">

### Step 2.1: Core Metrics

| Metric | Formula |
|--------|---------|
| Engagement Rate | (Likes + Comments + Saves) / Reach × 100 |
| CPM | (Total Spend / Total Impressions) × 1000 |
| CPE | Total Spend / Total Engagements |
| CPC | Total Spend / Total Clicks |
| CAC | Total Spend / Total New Customers |
| ROAS | Total Revenue / Total Spend |
| EMV | Total Engagements × Industry CPE Benchmark |

### Step 2.2: Per-Influencer Performance
Calculate all metrics per influencer for comparison.

### Step 2.3: Benchmark Comparison
Compare results against:
- Industry benchmarks from `knowledge-base/metrics/engagement-benchmarks.md`
- Platform averages
- Campaign objectives
- Previous campaign results (if available)

</phase>

<phase name="Analysis">

### Step 3.1: Performance Rating

| Rating | ROAS | ER vs Benchmark | Interpretation |
|--------|------|-----------------|----------------|
| ⭐ Outstanding | >10:1 | >2x benchmark | Exceptional results |
| 🟢 Excellent | 5-10:1 | 1.5-2x benchmark | Strong campaign |
| 🟢 Good | 3-5:1 | 1-1.5x benchmark | Solid performance |
| 🟡 Below Average | 1-3:1 | 0.5-1x benchmark | Room for improvement |
| 🔴 Poor | <1:1 | <0.5x benchmark | Underperformed |

### Step 3.2: Influencer Rankings
Rank by: best cost-per-engagement, best cost-per-click, best cost-per-conversion, best content quality.

### Step 3.3: Insights
- Which tier performed best?
- Which platform drove the most results?
- Which content format performed best?
- Did nano/micro outperform macro on efficiency?
- Was sponsored content performance consistent with organic?

</phase>

<phase name="Recommendations">

### Step 4.1: Optimization Suggestions
- **Re-engage**: Top performers for future campaigns
- **Adjust**: Influencers who need different brief/format
- **Drop**: Underperformers not worth reinvesting in
- **Scale**: Partnerships worth expanding

### Step 4.2: Budget Optimization
Reallocate budget toward higher-performing tiers, platforms, and content formats.

### Step 4.3: Strategy Optimization
Content format, timing, creative direction, and audience targeting refinements.

</phase>

<phase name="Deliverables">

### Step 5.1: Performance Report
Compile using `templates/performance-report.md`.

### Step 5.2: Influencer Scorecard

| Influencer | Spend | ER | CPE | CPC | Rating | Re-engage? |
|-----------|-------|-----|-----|-----|--------|:---:|
| | | | | | | |

### Step 5.3: Next Campaign Recommendations
Brief for the next campaign based on learnings.

</phase>
