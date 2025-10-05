from fastapi import FastAPI
from .routers import health, emissions, optimize

app = FastAPI(title="Sustainability AI API", version="0.1.0")
app.include_router(health.router, prefix="/health", tags=["health"])
app.include_router(emissions.router, prefix="/emissions", tags=["emissions"])
app.include_router(optimize.router, prefix="/optimize", tags=["optimize"])
