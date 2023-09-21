from django.db import models

from .base_model import BaseModel


class Category(BaseModel):
    str_field = 'name'
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
