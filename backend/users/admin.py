from django.contrib import admin
from .models import User

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    # This defines the columns shown in the list
    list_display = ('email', 'is_active', 'is_staff', 'date_joined')
    
    # This allows you to click the 'is_active' checkbox directly in the list
    list_editable = ('is_active','is_staff')
    
    # Sidebar filters to find unapproved users quickly
    list_filter = ('is_active', 'is_staff')
    
    search_fields = ('email',)
    ordering = ('-date_joined',)