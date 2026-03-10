# Output Adapter: Google Sheets Export

## When to Use
When the user wants to export IMA research data to Google Sheets for collaboration, analysis, or client reporting.

## Prerequisites
- Google Sheets API credentials in `.ima/config.yaml` (optional — can also generate paste-ready data)
- Target spreadsheet ID (optional)

## Instructions for AI Agent

### Sheet Structure

#### Influencer Shortlist Sheet
**Tab name:** `Influencer Shortlist`

| Column | Header | Format |
|:------:|--------|--------|
| A | Name | Text |
| B | Handle | Text |
| C | Platform | Text |
| D | Followers | Number |
| E | ER (%) | Percentage |
| F | Avg Likes | Number |
| G | Avg Comments | Number |
| H | Niche Score (1-10) | Number |
| I | Quality Score (1-10) | Number |
| J | Audience Fit (1-10) | Number |
| K | Safety Score (1-10) | Number |
| L | Composite Score | Number (formula) |
| M | Tier | Text (A/B/C) |
| N | Est. Rate (USD) | Currency |
| O | Profile URL | URL |
| P | Notes | Text |
| Q | Status | Text |

**Suggested formulas:**
- Composite Score: `=H2*0.25+I2*0.25+J2*0.20+K2*0.15+L2*0.10`
- Conditional formatting: Green (8-10), Yellow (6-7.9), Red (<6)

#### Campaign Tracker Sheet
**Tab name:** `Campaign Tracker`

| Column | Header | Format |
|:------:|--------|--------|
| A | Influencer | Text |
| B | Platform | Text |
| C | Tier | Text |
| D | Spend (USD) | Currency |
| E | Impressions | Number |
| F | Reach | Number |
| G | Likes | Number |
| H | Comments | Number |
| I | Saves | Number |
| J | Clicks | Number |
| K | Conversions | Number |
| L | Revenue (USD) | Currency |
| M | ER (%) | Formula: `=(G+H+I)/F*100` |
| N | CPM | Formula: `=D/E*1000` |
| O | CPE | Formula: `=D/(G+H+I)` |
| P | CPC | Formula: `=D/J` |
| Q | ROAS | Formula: `=L/D` |
| R | Rating | Text |

#### Outreach Tracker Sheet
**Tab name:** `Outreach Tracker`

| Column | Header |
|:------:|--------|
| A | Influencer |
| B | Handle |
| C | Platform |
| D | Priority (1/2/3) |
| E | Contact Method |
| F | Email |
| G | Status |
| H | Date Sent |
| I | Follow-Up 1 Date |
| J | Follow-Up 2 Date |
| K | Response Date |
| L | Rate Quoted |
| M | Counter Offer |
| N | Final Rate |
| O | Contract Status |
| P | Notes |

### Output Format
When generating Google Sheets-ready data:

1. **Tab-separated values (TSV)** — Easy paste into Sheets
2. **Include header row** — Always as first row
3. **Include formulas** — As Google Sheets formula syntax
4. **Formatting instructions** — Suggest conditional formatting, column widths, frozen rows

### With API Integration
If Google Sheets API is configured:
1. Connect using service account credentials
2. Create tabs if they don't exist
3. Write data starting from row 2 (row 1 = headers)
4. Apply formatting and conditional formatting
5. Share sheet with user's email

### Without API (Manual)
Generate clean TSV data with instructions:
```
1. Open your Google Sheet
2. Select cell A1 on the target tab
3. Paste the data below
4. Data > Split text to columns > Tab separator
5. Apply suggested formatting
```
