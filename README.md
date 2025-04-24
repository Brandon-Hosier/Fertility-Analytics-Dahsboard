# Simple Fertility Analytics Dashboard

A beginner-friendly dashboard for visualizing fertility treatment data.

## What This Dashboard Does

This dashboard shows important information about fertility treatments:

- How many sessions and users we have
- What devices people use (iOS or Android)
- What treatment phases people are in
- What treatment protocols are being used
- What previous treatments people have had

## How to Use This Dashboard

1. Clone this project
2. Install the needed packages: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser to the URL shown in the terminal

## How to Update the Data

1. Export your data from BigQuery as a JSON file
2. Replace the contents of `src/data/raw_data.json` with your new data
3. Refresh the dashboard to see the updated information

## Data Format

The data should look like this:

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
  // More session data...
]
```

## Built With

- [Astro](https://astro.build/) - The web framework
- [Chart.js](https://www.chartjs.org/) - For making the charts