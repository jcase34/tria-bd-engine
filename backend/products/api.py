from ninja import NinjaAPI
from ninja import Router
from typing import List
from .models import Product
from .schemas import ProductSchema
from ninja_jwt.authentication import JWTAuth

router = Router()

# The path is now just "/smarc" because it will be prefixed by the core API
@router.get("/smarc", response=List[ProductSchema])
def list_smarc_products(request):
    # We only want products where category is SMARC
    qs = Product.objects.filter(category="SMARC")
    return qs