# Aurevia Estates — Frontend (React + Vite)

> *"Where Every Property Finds Its Worth."*

Aurevia Estates is a premier, machine-learning-driven real estate valuation platform designed for Indian metropolitan markets (Bangalore, Mumbai, Hyderabad, Pune, and Nagpur). It communicates with the FastAPI machine learning backend to benchmark four distinct learning paradigms (Random Forest, Decision Tree, Ridge Regression, and K-Nearest Neighbors) to deliver real-time, transparent property appraisals.

## Brand Identity
- **Website Name**: Aurevia Estates
- **Browser Title**: Aurevia Estates — Intelligent Property Valuation
- **Tagline**: Where Every Property Finds Its Worth.
- **Palette**: Deep Forest Green (`#162a1e`), Champagne Gold (`#c5a059`), and Warm Ivory (`#f8f5ee`).

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Ensure `VITE_API_URL` points to your backend:
```env
VITE_API_URL=http://127.0.0.1:8000
```

### 3. Start Development Server
```bash
npm run dev
```
The application will be live at `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```

## Render Deployment (Static Site)
- **Service Type**: Static Site
- **Build Command**: `npm ci && npm run build`
- **Publish Directory**: `dist`
- **Environment Variables**:
  - `VITE_API_URL`: `https://<your-backend-app-name>.onrender.com`
