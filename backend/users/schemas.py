from ninja import ModelSchema, Schema
from .models import User

# What the user sends during sign-up
class RegisterIn(Schema):
    email: str
    password: str

# What the API returns
class UserOut(ModelSchema):
    class Meta:
        model = User
        fields = ['id', 'email', 'is_active']