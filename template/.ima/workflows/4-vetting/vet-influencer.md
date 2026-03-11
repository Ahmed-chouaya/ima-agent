---
name: Vet Influencer
agent: /audit
supporting_agents: [/scout, /roi]
description: Deep-dive vetting workflow for evaluating influencer authenticity, quality, and brand safety
---

# Workflow: Vet Influencer

<overview>
Deep vetting pipeline for evaluating individual influencers before partnership.
</overview>

<prerequisites>
- Influencer handle(s) or profile URL(s)
- Brand brief or campaign context (optional but recommended)
</prerequisites>

<inputs>
- **Influencer identifier** (handle, name, or URL)
- **Platform** (Instagram, TikTok, YouTube, etc.)
- **Brand context** (what brand/campaign this is for)
- **Vetting depth** (lite / standard / deep — from config)
</inputs>

---

<phase name="Data Collection" duration="10-15 minutes per influencer">

### Step 1.1: Profile Snapshot
Gather basic profile information:
- Display name, handle, bio
- Follower/following count
- Total posts/videos/content count
- Profile category and verification status
- Links in bio, website, email

### Step 1.2: Content Sample
Analyze the most recent 15-20 posts:
- Content themes and topics covered
- Content formats (photos, Reels, carousels, Stories, TikToks)
- Posting frequency (posts per week)
- Caption style and length
- Hashtag usage patterns

### Step 1.3: Engagement Sampling
For the most recent 10-12 posts:
- Like count per post
- Comment count per post
- Calculate average ER
- Note engagement variance (is it consistent or spiky?)
- Sample comment quality (are they genuine or bot-like?)

</phase>

<phase name="Authenticity Assessment" duration="10-15 minutes per influencer">

### Step 2.1: Engagement Quality Check

| Signal | Healthy | Suspicious |
|--------|---------|------------|
| Comment quality | Detailed, on-topic, varied | Generic, emoji-only, repetitive |
| Comment-to-like ratio | 1-5% of likes | <0.5% or >10% (unusual) |
| Engagement consistency | Similar ER across posts | Wild variance (some 10%, some 0.5%) |
| Response to comments | Creator replies to comments | Zero engagement with audience |
| Like sources | Accounts with posts & followers | Empty/private/new accounts |

### Step 2.2: Growth Pattern Analysis
Research the influencer's growth trajectory:
- Is follower growth gradual or shows sudden spikes?
- Do follower spikes correlate with content (viral post) or are unexplained?
- Following-to-follower ratio (healthy: <0.5 for accounts >10K)
- Any evidence of follower drops (mass unfollows suggest bot cleanups)

### Step 2.3: Red Flag Scan
Check against `knowledge-base/metrics/red-flags.md`:
- [ ] Sudden follower spikes without corresponding content/viral moments
- [ ] Engagement pods (same group of accounts commenting on every post)
- [ ] Suspicious follower demographics (location mismatches)
- [ ] Comment sections full of generic praise or emoji strings
- [ ] Very high ER without proportional reach
- [ ] Bought verification badges
- [ ] Inconsistent audience demographics across platforms

**Authenticity Score: 1-100**
- 80-100: High confidence authentic
- 60-79: Likely authentic, minor concerns
- 40-59: Mixed signals, proceed with caution
- Below 40: Significant concerns, recommend against

</phase>

<phase name="Content Quality Review" duration="10-15 minutes per influencer">

### Step 3.1: Visual Quality
Rate 1-10: Image/video resolution, composition, color grading, thumbnails

### Step 3.2: Narrative Quality
Rate 1-10: Storytelling ability, caption quality, hooks, value provided

### Step 3.3: Sponsored Content Quality
If the influencer has done brand partnerships, assess:
- How naturally do they integrate brands?
- Are sponsored posts lower quality than organic?
- Do sponsored posts maintain their authentic voice?
- Audience reaction to sponsored content (positive, neutral, negative)
- Proper FTC disclosure compliance

</phase>

<phase name="Brand Safety Assessment" duration="10-15 minutes per influencer">

### Step 4.1: Content Risk Review
Check for: controversial content, inappropriate language/imagery, political statements, competitor conflicts, value misalignment.

### Step 4.2: History & Reputation
Research: past controversies, negative press, social media conflicts, legal issues, deleted content.

### Step 4.3: Competitive Conflicts
Check for: active competitor partnerships, exclusivity conflicts, negative brand mentions, controversial brand associations.

### Step 4.4: Risk Rating
- 🟢 Low Risk → Proceed confidently
- 🟡 Medium Risk → Proceed with monitoring plan
- 🟠 High Risk → Proceed only with protective contract clauses
- 🔴 Critical Risk → Do not proceed

</phase>

<phase name="Summary & Recommendation" duration="5-10 minutes per influencer">

### Step 5.1: Compile Vetting Report
```
VETTING SUMMARY: [Influencer Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Overall Score:         [X/100]
Authenticity Score:    [X/100]
Content Quality Score: [X/10]
Brand Safety Rating:   [🟢/🟡/🟠/🔴]

Key Findings:
• [Finding 1]
• [Finding 2]
• [Finding 3]

Recommendation:       [PROCEED / PROCEED WITH CAUTION / DO NOT PROCEED]
Recommended Rate:     $[X] per [content type]
Best For:             [Campaign type / objective]
```

### Step 5.2: Suggest Next Steps
- **If PROCEED**: Hand off to `/outreach` for outreach, or `/campaign` for planning
- **If CAUTION**: List specific contract clauses needed, monitoring requirements
- **If DO NOT PROCEED**: Suggest alternative influencers from the shortlist

</phase>

<depth_settings>

| Setting | Posts Analyzed | Checks Performed | Time per Influencer |
|---------|:---:|:---:|:---:|
| **Lite** | 5-8 | Basic ER + visual red flags | 5-10 min |
| **Standard** | 10-12 | Full authenticity + content + safety | 15-25 min |
| **Deep** | 15-20+ | All checks + historical + competitor | 30-45 min |

</depth_settings>
