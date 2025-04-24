# Dashboard Data

This folder contains the data used by our fertility dashboard.

## Important File

- `raw_data.json` - This is the main data file that powers the dashboard

## How to Update the Data

1. Export your data from BigQuery as a JSON file
2. Replace the contents of `raw_data.json` with your new data
3. Refresh the dashboard to see the updated charts

## What the Data Should Look Like

The data should be an array of session objects like this:

```json
[
  {
    "date": "2025-02-02",
    "session_id": "ios-256829-1738538798813",
    "platform": "IOS",
    "country": "United Kingdom",
    "aura_user_id": "661",
    "protocol": "FETMDR",
    "phase": "PTPR",
    "phase_day": "8",
    "previous_art_cycles": "1",
    "previous_treatments": "ivf",
    "fertility_treatment_reason": "other",
    "previous_pregnancy": "0",
    "session_length": "172",
    "start_session_datetime": "2025-02-02 23:26:38.814000 UTC",
    "end_session_datetime": "2025-02-02 23:29:30.954000 UTC"
  },
  // More session objects...
]
```

The dashboard will automatically process this data and show the charts.