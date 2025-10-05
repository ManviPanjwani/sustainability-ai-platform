[![CI](https://github.com/ManviPanjwani/sustainability-ai-platform/actions/workflows/ci.yml/badge.svg)](https://github.com/ManviPanjwani/sustainability-ai-platform/actions/workflows/ci.yml)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Issues](https://img.shields.io/github/issues/ManviPanjwani/sustainability-ai-platform)
![Stars](https://img.shields.io/github/stars/ManviPanjwani/sustainability-ai-platform)
![Last Commit](https://img.shields.io/github/last-commit/ManviPanjwani/sustainability-ai-platform)

**Real-time, AI-powered sustainability intelligence** to measure, forecast, and reduce an organization’s carbon footprint across energy, logistics, and operations.


## ✨ Highlights
- 🔌 **Live ingestion**: IoT + logs (MVP uses sample data)
- 📈 **Emissions calculators**: Scope 2 (MVP), Scope 1/3 planned
- 🤖 **AI**: forecasting & optimization (roadmap)
- 🗺️ **Dashboard**: Next.js app with live API calls
- 🛡️ **Governance**: OPA/Rego (roadmap)

---

## 🚀 Quick Start (local dev)

### Backend (FastAPI)
```bash
cd apps/api
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --host 0.0.0.0 --port 8000
# open http://localhost:8000/health/
