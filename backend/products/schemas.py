from ninja import Schema, Field
from decimal import Decimal

class ProductSchema(Schema):
    id: int
    category: str
    part_name: str
    part_number: str
    description: str
    # We keep these as integers so the Shadcn table can sort them correctly
    memory_gb: int
    storage_gb: int
    design_cost: Decimal
    resale_cost: Decimal
    eccn_code: str
    hs_code: str