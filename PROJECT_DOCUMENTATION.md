# Fertility Analytics Dashboard - Technical Documentation

## Project Overview
This is a web-based analytics dashboard built with Astro and Chart.js that visualizes fertility treatment data. The dashboard presents key metrics and visualizations about fertility treatments, patient demographics, and treatment outcomes.

## Technology Stack
- **Framework**: Astro v5.2.5
- **Charting Library**: Chart.js v4.4.1
- **Styling**: Custom CSS with responsive design
- **Data Format**: JSON

## Project Structure
```
/
├── src/
│   ├── layouts/
│   │   └── Layout.astro       # Base layout component
│   ├── pages/
│   │   └── index.astro        # Main dashboard page
│   └── data/
│       └── raw_data.json      # Source data file
├── astro.config.mjs           # Astro configuration
├── package.json               # Project dependencies
└── tsconfig.json             # TypeScript configuration
```

## Data Schema
The dashboard expects data in the following JSON format:

```json
{
  "date": "YYYY-MM-DD",
  "session_id": "string",
  "platform": "string (IOS/ANDROID)",
  "country": "string",
  "aura_user_id": "string",
  "protocol": "string",
  "phase": "string",
  "phase_day": "string",
  "previous_art_cycles": "string",
  "previous_treatments": "comma-separated string",
  "fertility_treatment_reason": "string",
  "previous_pregnancy": "string",
  "session_length": "string",
  "start_session_datetime": "datetime string",
  "end_session_datetime": "datetime string"
}
```

## Key Components

### 1. Metrics Display
- Total Sessions: Count of all treatment sessions
- Unique Users: Count of distinct user IDs
- Average Session Length: Mean duration of sessions in seconds

### 2. Visualizations
The dashboard includes four main charts:

1. **Platform Distribution** (Doughnut Chart)
   - Shows distribution of iOS vs Android users
   - Located in top-left quadrant
   - Uses pastel color scheme

2. **Treatment Protocols** (Pie Chart)
   - Displays distribution of different treatment protocols
   - Located in top-right quadrant
   - Matches platform chart styling

3. **Treatment Phases** (Horizontal Bar Chart)
   - Shows distribution of treatment phases
   - Full-width display below pie charts
   - Uses horizontal layout for better label readability

4. **Previous Treatments** (Horizontal Bar Chart)
   - Visualizes history of previous treatments
   - Full-width display at bottom
   - Uses consistent color scheme

## Data Processing Functions

### `getData()`
- Fetches and processes raw JSON data
- Calculates key metrics
- Returns structured data object for charts

### `calculateAverageSessionLength(data)`
- Filters valid sessions
- Calculates mean session duration
- Returns rounded average in seconds

### `countOccurrences(data, field)`
- Generic counter for categorical data
- Handles missing/empty values as "Not Specified"
- Returns frequency distribution object

### `countPreviousTreatments(data)`
- Processes comma-separated treatment lists
- Handles empty/missing values
- Returns treatment frequency distribution

## Chart Configuration

Each chart type has specific configuration for optimal display:

### Pie/Doughnut Charts
```javascript
{
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 15,
        padding: 20,
        font: { size: 14 }
      }
    }
  }
}
```

### Bar Charts
```javascript
{
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false }
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { 
        color: '#B3B3B3',
        font: { size: 14 }
      }
    },
    y: {
      grid: { display: false },
      ticks: {
        color: '#B3B3B3',
        font: { size: 14 },
        padding: 10
      }
    }
  }
}
```

## Responsive Design

The dashboard implements responsive design with three main breakpoints:

1. **Desktop** (>1200px)
   - Full-width: 1400px
   - 2x2 chart grid
   - Large chart sizes

2. **Tablet** (768px-1200px)
   - Adjusted padding
   - Reduced chart heights
   - Maintained grid layout

3. **Mobile** (<768px)
   - Single column layout
   - Uniform chart heights
   - Adjusted font sizes

## Color Scheme
The dashboard uses a consistent color palette:
- Background: #121212 (dark mode)
- Cards: #282828
- Text: #FFFFFF, #B3B3B3
- Charts: Pastel colors (#FFB6C1, #FF9AA2, #E3A587, #FFD1DC)
- Gradients: Linear gradient from #FFB6C1 to #F4C2C2

## Error Handling
- Comprehensive error catching in data fetching
- Fallback displays for failed data loads
- Graceful handling of missing or malformed data

## Performance Considerations
- Async data loading
- Efficient data processing
- Optimized chart rendering
- Responsive image handling
- Minimal DOM updates

## Accessibility Features
- Semantic HTML structure
- Color contrast compliance
- Responsive text sizing
- Screen reader compatibility
- Keyboard navigation support