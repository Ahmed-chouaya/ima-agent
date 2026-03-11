# Output Adapter: Obsidian Export

## When to Use
When the user wants research output organized as an Obsidian vault with wikilinks, YAML frontmatter, tags, and Map of Content (MOC) index files.

## Instructions for AI Agent

### Core Principles
1. **Every file gets YAML frontmatter** — Type, metadata, tags, dates
2. **Use `[[wikilinks]]`** — Link related files together (profiles → audits → outreach)
3. **Create `_index.md` MOC files** — One in each directory as a table of contents
4. **Use consistent tag taxonomy** — Niche, platform, tier, status, type
5. **Name files with handles** — `@handle.md`, `@handle-audit.md`, `@handle-outreach.md`

### Directory Structure

```
clients/[client-name]/
├── _index.md                    # Root MOC — links to everything
├── progress.yaml                # Session state (managed by /assist)
├── config.yaml                  # Client config
├── discovery/
│   ├── _index.md                # Discovery MOC
│   ├── shortlist.md             # Ranked shortlist with [[wikilinks]]
│   ├── @handle1.md              # Individual profiles
│   └── @handle2.md
├── audits/
│   ├── _index.md                # Audits MOC
│   ├── @handle1-audit.md        # Links to [[discovery/@handle1]]
│   └── @handle2-audit.md
├── outreach/
│   ├── _index.md                # Outreach MOC
│   ├── @handle1-outreach.md     # Links to profile + audit
│   └── @handle2-outreach.md
├── campaigns/
│   ├── _index.md
│   └── [campaign-name].md
├── reports/
│   ├── _index.md
│   └── [report-name].md
└── media-kits/
    ├── _index.md
    └── @handle1-media-kit.md
```

### YAML Frontmatter

Add to the top of **every** markdown file. See `templates/obsidian-moc.md` for full schemas.

Essential fields for all files:
```yaml
---
type: [influencer-profile|audit-report|outreach-draft|campaign|report|media-kit|moc]
created: [YYYY-MM-DD]
tags: [relevant, tags, here]
---
```

### Wikilink Conventions

| From | To | Link Format |
|------|------|------|
| Shortlist | Profile | `[[discovery/@handle]]` |
| Audit | Profile | `[[discovery/@handle]]` |
| Outreach | Profile | `[[discovery/@handle]]` |
| Outreach | Audit | `[[audits/@handle-audit]]` |
| MOC | Any file | `[[directory/filename]]` |
| Campaign | Profiles | `[[discovery/@handle]]` |

### Tag Taxonomy

Use these standardized tags in frontmatter:

| Category | Tags |
|----------|------|
| **Type** | `influencer`, `brand`, `campaign`, `audit`, `outreach`, `report`, `moc` |
| **Platform** | `instagram`, `tiktok`, `youtube`, `twitter-x`, `linkedin` |
| **Tier** | `nano`, `micro`, `mid`, `macro`, `mega` |
| **Status** | `discovered`, `vetted`, `contacted`, `contracted`, `active`, `archived` |
| **Niche** | *user-defined (e.g., `skincare`, `fitness`, `tech`)* |

### Shortlist File Format

The main shortlist (`discovery/shortlist.md`) should be formatted as:

```markdown
---
type: shortlist
count: [number]
niche: "[niche]"
platform: "[platform]"
created: [date]
tags: [shortlist, [niche], [platform]]
---

# [Niche] Influencer Shortlist

> [count] influencers discovered on [platform] | [date]

## Top Picks

| Rank | Influencer | Score | Tier | Followers | ER | Profile |
|:----:|------------|:-----:|------|----------:|---:|---------|
| 1 | [[discovery/@handle1\|@handle1]] | 8.5 | Micro | 34.2K | 4.8% | [Link](url) |
| 2 | [[discovery/@handle2\|@handle2]] | 7.9 | Nano | 8.1K | 6.2% | [Link](url) |

## Individual Profiles
- [[discovery/@handle1]] — ⭐ 8.5 — Micro — 34.2K followers
- [[discovery/@handle2]] — ⭐ 7.9 — Nano — 8.1K followers
```

### Linking Multiple Files

When creating a full pipeline output, cross-reference everything:

**In a profile file (`@handle.md`):**
```markdown
## Related
- **Audit:** [[audits/@handle-audit]]
- **Outreach:** [[outreach/@handle-outreach]]
```

**In an audit file (`@handle-audit.md`):**
```markdown
## Related
- **Profile:** [[discovery/@handle]]
- **Outreach:** [[outreach/@handle-outreach]]
```

## File Naming Rules
1. Use `@handle` as the base filename for influencer-related files
2. Use lowercase with hyphens for everything else
3. MOC files are always `_index.md`
4. Prefix nothing — let the directory provide context
