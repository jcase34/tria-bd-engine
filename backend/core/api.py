from ninja_extra import NinjaExtraAPI
from ninja_jwt.controller import NinjaJWTDefaultController
from ninja_jwt.authentication import JWTAuth
from ninja import Schema
from users.api import router as users_router

api = NinjaExtraAPI()

# 1. Setup the Login/Refresh Endpoints
api.register_controllers(NinjaJWTDefaultController)
api.add_router("/users", users_router)

# 2. Define what data we want to show
class UserSchema(Schema):
    email: str
    first_name: str
    is_authenticated: bool

@api.get("/hello")
def hello(request):
    print(request)
    return {"message":"Hello world"}

# 3. Create a Protected Route
@api.get("/me", response=UserSchema, auth=JWTAuth())
def me(request):
    # JWTAuth ensures that request.user is a real User object from your Neon DB
    return request.user