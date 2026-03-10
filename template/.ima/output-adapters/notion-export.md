# Output Adapter: Notion Export

## When to Use
When the user wants to export IMA research directly to Notion databases or pages. Requires either Notion MCP server or Notion API key.

## Prerequisites
- **Option A:** Notion MCP server connected to the AI tool
- **Option B:** Notion API key configured in `.ima/config.yaml`
- A target Notion database or page

## Instructions for AI Agent

### Using Notion MCP Server
If a Notion MCP server is available, use its tools to:

1. **Create or find the target database**
2. **Create database entries** for each influencer/campaign/report
3. **Set properties** matching the schema below

### Notion Database Schemas

#### Influencer Database
| Property | Type | Description |
|----------|------|-------------|
| Name | Title | Influencer name |
| Handle | Text | @handle |
| Platform | Select | Instagram, TikTok, YouTube, etc. |
| Followers | Number | Follower count |
| Engagement Rate | Number | ER percentage |
| Tier | Select | Nano, Micro, Mid, Macro, Mega |
| Composite Score | Number | IMA score (1-10) |
| Niche Relevance | Number | Score (1-10) |
| Content Quality | Number | Score (1-10) |
| Brand Safety | Select | Low, Medium, High, Critical |
| Estimated Rate | Number | USD |
| Status | Select | Discovered, Vetted, Contacted, Contracted, Active, Archived |
| Profile URL | URL | Link to profile |
| Notes | Text | Additional notes |
| Last Updated | Date | Auto |

#### Campaign Database
| Property | Type | Description |
|----------|------|-------------|
| Campaign Name | Title | Campaign name |
| Brand | Text | Brand name |
| Objective | Select | Awareness, Engagement, Conversions, etc. |
| Budget | Number | Total budget USD |
| Start Date | Date | Campaign start |
| End Date | Date | Campaign end |
| Status | Select | Planning, Active, Complete, Archived |
| Influencers | Relation | Link to Influencer database |
| ROAS | Number | Return on ad spend |
| Total Reach | Number | Impressions/reach |
| Performance Rating | Select | Outstanding, Excellent, Good, Average, Poor |

#### Outreach Tracker
| Property | Type | Description |
|----------|------|-------------|
| Influencer | Relation | Link to Influencer database |
| Campaign | Relation | Link to Campaign database |
| Status | Select | Not Started, Sent, Followed Up, Responded, Negotiating, Contracted, Declined |
| Contact Method | Select | Email, DM, Management |
| Sent Date | Date | First outreach date |
| Response Date | Date | When they responded |
| Rate Quoted | Number | USD |
| Final Rate | Number | USD |
| Next Action | Text | What to do next |
| Notes | Text | Conversation notes |

### Formatting for Notion Pages
When creating Notion pages (not database entries):
- Use heading blocks for section headers
- Use table blocks for data tables
- Use callout blocks for key insights
- Use toggle blocks for detailed sections
- Use divider blocks between major sections

### Manual Export (No MCP)
If no Notion integration is available, generate content formatted for easy copy-paste into Notion:
1. Output as clean Markdown (Notion supports Markdown paste)
2. Structure tables for easy database import
3. Provide CSV for database bulk import
