---
name: Discover Influencers
agent: /scout
supporting_agents: [/audit, /roi]
description: Full pipeline for discovering and shortlisting influencers in any niche
---

# Workflow: Discover Influencers

<overview>
End-to-end pipeline for discovering, evaluating, and shortlisting influencers.
</overview>

<prerequisites>
- `.ima/config.yaml` configured with niche, platforms, and influencer preferences
- Clear understanding of campaign goals (or use `/brand audit` first)
</prerequisites>

<inputs>
- **Niche/industry** (from config)
- **Target platforms** (from config)
- **Influencer tier preference** (from config)
- **Specific criteria** (optional: location, language, content style)
- **Quantity** (how many influencers needed)
</inputs>

---

<phase name="Research Setup" duration="5-10 minutes">

### Step 1.1: Load Context
- Read `.ima/config.yaml` for niche, platforms, audience, preferences
- Read relevant platform guide from `knowledge-base/platforms/`
- Read `knowledge-base/metrics/engagement-benchmarks.md` for ER thresholds

### Step 1.2: Generate Search Strategy
Based on the niche, create a search plan:
- **Primary keywords**: Core niche terms (5-10)
- **Secondary keywords**: Related terms, problems, interests (10-15)
- **Hashtags**: Niche-specific hashtags to research (15-20)
- **Competitor brands**: Brands in this niche whose influencers to study (3-5)
- **Existing influencer lists**: Known curated lists or directories to check

### Step 1.3: Define Scoring Criteria
Set weights based on campaign goals:

| Criterion | Awareness Campaign | Engagement Campaign | Conversion Campaign |
|-----------|:-:|:-:|:-:|
| Niche Relevance | 20% | 25% | 25% |
| Engagement Quality | 15% | 30% | 25% |
| Audience Fit | 20% | 20% | 25% |
| Content Quality | 20% | 15% | 10% |
| Reach/Followers | 20% | 5% | 5% |
| Brand Safety | 5% | 5% | 10% |

</phase>

<phase name="Discovery" duration="20-40 minutes">

### Step 2.1: Web Research
Execute searches in this order:

1. `"best [niche] influencers [platform] [year]"` — Curated lists
2. `"top [niche] creators [platform]"` — Editorial picks
3. `"[niche] micro influencers to follow"` — Micro-tier focused
4. `"[competitor brand] influencer partnership"` — Competitor intel
5. `"[niche] [platform] hashtag challenge"` — Trending creators
6. `"[niche] content creator directory"` — Directories and databases

### Step 2.2: Hashtag Mining
For each target platform:
- Search top 5-10 niche hashtags
- Identify recurring creators (appearing in 3+ hashtag searches = high relevance)
- Note hashtag usage patterns and content themes

### Step 2.3: Competitor Influencer Mining
For each competitor brand:
- Search `"[brand] x [influencer/creator]"`
- Check brand's social media for tagged collaborations
- Look for `#ad`, `#sponsored`, `#partner` in brand mentions
- Note which influencers work with competing brands

### Step 2.4: Build Raw List
Compile all discovered influencers into a raw list:
- Name / Handle / Platform
- Approximate follower count
- How they were discovered (hashtag, competitor, list, etc.)
- Initial relevance impression (high/medium/low)

**Target: 2-3x the final shortlist size** (e.g., 30 for a shortlist of 10)

</phase>

<phase name="Profiling" duration="30-60 minutes">

### Step 3.1: Quick Screen
Eliminate clearly unsuitable candidates:
- ❌ Followers outside target tier range
- ❌ Inactive (no posts in 30+ days)
- ❌ Obviously off-niche
- ❌ Clear brand safety concerns
- ❌ Location mismatch (if location is a requirement)

### Step 3.2: Detailed Profiling
For remaining candidates, research each influencer and fill out the `templates/influencer-profile.md`:
- Bio and niche positioning
- Follower count and growth trend
- Engagement rate (calculate from recent 10-12 posts)
- Content themes and quality assessment
- Audience demographics (estimate from comments, content, bio)
- Brand collaborations history
- Red flag check (use `knowledge-base/metrics/red-flags.md`)

### Step 3.3: Calculate Engagement Rate
For each influencer:
```
ER = (Average Likes + Average Comments) / Follower Count × 100

Use the last 10-12 posts (excluding outlier viral posts)
Compare against benchmarks in knowledge-base/metrics/engagement-benchmarks.md
```

</phase>

<phase name="Scoring & Ranking" duration="10-15 minutes">

### Step 4.1: Score Each Influencer
Apply the scoring criteria from Phase 1 to each profiled influencer.
Rate each criterion 1-10, apply weights, calculate composite score.

### Step 4.2: Rank and Tier
Sort by composite score and create tiers:
- **Tier A (8-10)**: Ideal matches, prioritize outreach
- **Tier B (6-7.9)**: Strong matches, secondary priority
- **Tier C (4-5.9)**: Acceptable, use as backups

### Step 4.3: Cross-Reference
- Check for overlapping audiences between selected influencers
- Ensure diversity in content style and audience demographics
- Verify no competing brand exclusivities

</phase>

<phase name="Deliverables" duration="10-15 minutes">

### Step 5.1: Build Shortlist
Create the final shortlist document with:
- **Summary table**: All shortlisted influencers with key metrics
- **Detailed profiles**: Full profile for each (using template)
- **Scoring rationale**: Why each was selected
- **Recommendations**: Tiers and suggested outreach priority

### Step 5.2: Format Output
Format according to user's preferred output (check `config.yaml`):
- Markdown report → `outputs/discovery/[niche]-[date].md`
- CSV data → `outputs/discovery/[niche]-[date].csv`
- Notion/Sheets → Use appropriate output adapter

### Step 5.3: Suggest Next Steps
- **Vet top picks**: Hand off Tier A to `/audit` for deep vetting
- **Plan campaign**: Hand off shortlist to `/campaign` for campaign design
- **Start outreach**: Hand off to `/outreach` for personalized messaging

</phase>

<quality_gates>
Before finalizing, verify:
- [ ] All influencers match the niche criteria
- [ ] Engagement rates are benchmarked against industry standards
- [ ] Red flag checks completed for all shortlisted influencers
- [ ] Audience fit verified for target demographic
- [ ] Scoring is consistent and well-documented
- [ ] Output format matches user preference
- [ ] Sources and research methods are documented
</quality_gates>
