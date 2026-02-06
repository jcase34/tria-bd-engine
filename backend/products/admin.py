from django.contrib import admin
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    # Overriding labels for the list view headers
    list_display = ('part_number', 'part_name', 'get_mem', 'get_storage')

    def get_mem(self, obj):
        return f"{obj.memory_gb} GB"
    get_mem.short_description = 'Memory (GB)'

    def get_storage(self, obj):
        return f"{obj.storage_gb} GB"
    get_storage.short_description = 'Storage (GB)'