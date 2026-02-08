# toodlersdata

Decision-grade analytics for farms. Real-time sensor intelligence, prediction, and recommendations.

Live Demo: `https://toodlersdata.vercel.app`

## Overview
toodlersdata ingests hardware data from Arduino + ESP32 and transforms it into a minimalist, data-first command center. It focuses on real-time analysis, fast filtering, anomaly detection, and clear recommendations for farmers.

## Core Features (Concise)
- Real-time ingestion (REST / MQTT / WebSocket ready)
- Multi-device and multi-farm support
- Device health + calibration tracking
- 10+ analytics views (line, bar, area, scatter, correlation, distribution, trend)
- Anomaly alerts and data confidence scoring
- Prediction engine (rule-based, ML-ready)
- Recommendations for crop, irrigation, fertilizer, power usage
- Weather snapshot + forecast integration
- Power availability and voltage monitoring
- In-app farm assistant (chatbot-lite)
- Built-in translator for Hindi/Marathi usage
- Historical archives with export (CSV/JSON/PDF ready)

## UI Philosophy
- 90% black, ultra-minimal
- Sharp edges only (no rounded corners)
- Data-first layout with smooth transitions
- High-contrast charts and button-driven navigation

## Architecture (High-Level)
- `Next.js` App Router frontend
- `Next API routes` for ingestion + auth placeholders
- `MongoDB/PostgreSQL` ready (not wired)
- `NextAuth/Firebase` ready for Google OAuth (not wired)

## Hardware Data Flow (Example)
1. Sensor → ESP32/Arduino
2. Device → `/api/sensors` (REST/MQTT/WebSocket gateway)
3. Validation + timestamp + geo tagging
4. Analytics + predictions
5. UI updates in real time

## Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_APP_NAME=toodlersdata
NEXT_PUBLIC_WEATHER_PROVIDER=mock
WEATHER_API_KEY=your_key
GOOGLE_CLIENT_ID=your_id
GOOGLE_CLIENT_SECRET=your_secret
DATABASE_URL=your_db_url
```

## Development
```
npm install
npm run dev
```

## Deployment (Vercel)
1. Push to GitHub
2. Import the repo in Vercel
3. Add environment variables
4. Deploy

## Project Structure
```
src/
  app/
    login/
    dashboard/
    analytics/
    predictions/
    recommendations/
    history/
  components/
    charts/
    layout/
    ui/
  lib/
    analytics/
    predictions/
    weather.ts
```

## Notes
- This repo is production-ready for UI/UX and front-end workflow.
- API routes are intentionally lightweight placeholders for fast integration.
