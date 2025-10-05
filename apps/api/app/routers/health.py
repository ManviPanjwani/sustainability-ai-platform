from fastapi import APIRouter
router = APIRouter()

@router.get("/")
def ok_slash():
    return {"status": "ok"}

@router.get("")  # also handle /health without trailing slash
def ok_noslash():
    return {"status": "ok"}