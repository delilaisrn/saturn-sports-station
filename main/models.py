from django.db import models
from django.contrib.auth.models import User
import uuid

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    description = models.TextField()
    thumbnail = models.URLField()
    category = models.CharField(max_length=50)
    is_featured = models.BooleanField(default=False)
    is_product_hot = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    product_views = models.IntegerField(default=0)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
 

    def __str__(self):
        return self.name
