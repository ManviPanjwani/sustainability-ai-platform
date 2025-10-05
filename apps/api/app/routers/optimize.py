from fastapi import APIRouter
router = APIRouter()

@router.get("/recommendations")
def recommendations():
    return {
        "tips": [
            "Shift non-critical loads to off-peak hours",
            "Lower HVAC setpoint by 1°C between 1–4 pm",
        ]
    }
