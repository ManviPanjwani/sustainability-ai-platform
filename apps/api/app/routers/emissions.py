from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class Reading(BaseModel):
    facility_id: str
    kwh: float
    emission_factor_kg_per_kwh: float

@router.post("/scope2")
def scope2(readings: list[Reading]):
    total = sum(r.kwh * r.emission_factor_kg_per_kwh for r in readings)
    return {"scope": 2, "co2e_kg": total}
