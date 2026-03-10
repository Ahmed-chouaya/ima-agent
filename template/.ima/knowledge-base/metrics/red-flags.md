# Red Flags: Fraud & Authenticity Detection

## Quick Reference: Red Flag Checklist

Use this checklist when vetting any influencer. Each flag adds risk — multiple flags = significant concern.

### Follower Quality Red Flags 🚩
- [ ] Sudden follower spikes (10K+ in days) without viral content
- [ ] Follower drops after spikes (bot cleanup signals)
- [ ] Following-to-follower ratio > 0.5 (for accounts > 50K)
- [ ] High % of followers with no profile photos
- [ ] High % of followers with no posts
- [ ] Followers from irrelevant countries (e.g., US brand but mostly followers from bot farms)
- [ ] Follower count increased but engagement stayed flat

### Engagement Quality Red Flags 🚩
- [ ] Engagement rate far below tier benchmarks (see `engagement-benchmarks.md`)
- [ ] Engagement rate suspiciously high for tier (possible engagement pods)
- [ ] Comment sections full of emoji-only responses (🔥❤️💯)
- [ ] Same accounts commenting on every post (engagement pod)
- [ ] Comments not relevant to the content
- [ ] Likes from accounts with 0 posts or private with no content
- [ ] Wild engagement variance (some posts 10x others without clear reason)
- [ ] Zero replies from creator to comments

### Content Authenticity Red Flags 🚩
- [ ] All sponsored content, very little organic/personal content
- [ ] Dramatically different quality between sponsored and organic posts
- [ ] Content feels generic/templated (not authentic to their voice)
- [ ] Posting frequency changed dramatically (might have bought the account)
- [ ] Content niche suddenly changed (account pivoted or was sold)
- [ ] Watermarked content from other creators

### Growth Pattern Red Flags 🚩
- [ ] Staircase growth pattern (flat → sudden jump → flat → jump)
- [ ] Growth doesn't correlate with content quality or virality
- [ ] Rapidly growing but engagement declining
- [ ] New account with suspiciously high follower count
- [ ] Account was dormant for months then suddenly active with high followers

---

## How to Investigate Suspicious Signals

### Step 1: Engagement Audit
1. Calculate ER from the last 10-12 posts (exclude obvious outliers)
2. Compare against tier benchmarks from `engagement-benchmarks.md`
3. Check comment quality manually (read at least 20 comments)
4. Look for repeat commenters across posts (engagement pods)

### Step 2: Follower Audit
1. Scroll through follower list, noting:
   - % with profile photos
   - % with posts
   - % that look like real accounts vs. suspicious
2. Check following-to-follower ratio
3. Look for follower country distribution (if visible)

### Step 3: Growth Audit
1. Check if growth corresponds to content (viral posts should explain growth)
2. Look for unnatural patterns (perfectly even daily growth = bought)
3. Check if engagement grew proportionally with followers

### Step 4: Content Audit
1. Check posting consistency (sudden gaps or changes)
2. Compare sponsored vs organic content quality
3. Look for brand diversity (working with competing brands simultaneously)

---

## Severity Assessment

| Signal Count | Risk Level | Recommendation |
|:---:|:---:|---|
| 0-1 minor flags | 🟢 Low | Proceed normally |
| 2-3 minor flags | 🟡 Medium | Proceed with monitoring |
| 1 major flag | 🟠 High | Investigate further before deciding |
| 2+ major flags | 🔴 Critical | Do not proceed |
| Any combined with very low ER | 🔴 Critical | Strong indication of fake audience |

### Major vs Minor Flags

**Major Flags:**
- Staircase growth pattern (strong bot signal)
- Engagement pods (systematic fake engagement)
- ER below 50% of tier benchmark
- High % of followers with no posts (bot followers)

**Minor Flags:**
- Some emoji-only comments (normal for casual audiences)
- Following-to-follower ratio slightly high
- Occasional engagement variance (some posts just do better)
- Few inactive followers (normal for any account)

---

## Tools for Verification

If the user has access, suggest these tools for deeper analysis:
- **HypeAuditor** — Audience quality analysis
- **Social Blade** — Growth history and statistics
- **Not Just Analytics** — Instagram analytics
- **Modash** — Influencer vetting
- **Upfluence** — Fraud detection
- **Grin** — Audience authenticity

_Note: The IMA framework works without these tools using manual analysis methods above. Tools provide automation and deeper data._

---

## Communicating Red Flags

When reporting red flags in a vetting report:
1. **Be specific** — Name the exact flag and provide evidence
2. **Quantify** — Show numbers (e.g., "ER of 0.3% vs 2% tier benchmark")
3. **Show examples** — Link to specific posts or comments
4. **Rate severity** — Use the assessment framework above
5. **Give recommendation** — Don't just flag; recommend an action
