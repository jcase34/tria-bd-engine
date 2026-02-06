from django.db import models

class Product(models.Model):
    category = models.CharField(max_length=50, default="SMARC")
    part_name = models.CharField(max_length=255)
    part_number = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    
    # Store only the whole number (e.g., 4, 8, 16)
    memory_gb = models.IntegerField(help_text="Enter value in GB (e.g., 4)", default=0 )
    storage_gb = models.IntegerField(help_text="Enter value in GB (e.g., 32)", default=0)
    
    design_cost = models.DecimalField(max_digits=10, decimal_places=2)
    resale_cost = models.DecimalField(max_digits=10, decimal_places=2)
    eccn_code = models.CharField(max_length=20, blank=True)
    hs_code = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return f"{self.part_number} ({self.memory_gb}GB/{self.storage_gb}GB)"