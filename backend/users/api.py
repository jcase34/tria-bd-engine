from ninja import Router
from .models import User
from .schemas import RegisterIn, UserOut

router = Router(tags=["Auth"])

@router.post("/register", response=UserOut, auth=None)
def register(request, data: RegisterIn):
    # This automatically handles email normalization and is_active=False
    user = User.objects.create_user(**data.dict())
    return user