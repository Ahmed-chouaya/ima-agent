# Output Adapter: CSV Export

## When to Use
When the user requests structured data output for spreadsheets, databases, or data analysis tools.

## Instructions for AI Agent

When formatting IMA research output as CSV:

### Influencer Shortlist CSV
```csv
Name,Handle,Platform,Followers,Following,ER%,Avg_Likes,Avg_Comments,Niche_Relevance,Content_Quality,Audience_Fit,Brand_Safety,Composite_Score,Tier,Est_Rate_USD,Notes,Profile_URL
```

### Campaign Performance CSV
```csv
Influencer,Profile_URL,Platform,Tier,Spend_USD,Impressions,Reach,Likes,Comments,Saves,Shares,Clicks,Conversions,Revenue_USD,ER%,CPM,CPE,CPC,CAC,ROAS,Rating
```

### Outreach Tracker CSV
```csv
Influencer,Handle,Profile_URL,Platform,Priority,Contact_Method,Email,Status,Sent_Date,Response_Date,Rate_Quote,Counter_Offer,Final_Rate,Contract_Status,Notes
```

### Competitor Analysis CSV
```csv
Competitor,Platform,Influencer_Name,Influencer_Handle,Profile_URL,Tier,Content_Type,Est_Frequency,Est_Monthly_Spend,Exclusivity,Notes
```

## Formatting Rules
1. Use comma as delimiter
2. Wrap fields containing commas in double quotes
3. Use UTF-8 encoding
4. First row is always the header
5. Dates in YYYY-MM-DD format
6. Currency without symbols (just numbers)
7. Percentages as numbers (3.5, not 3.5%)

## File Naming
Save to: `outputs/[workflow-type]/[niche]-[date].csv`
Example: `outputs/discovery/sustainable-fashion-2026-03-10.csv`
