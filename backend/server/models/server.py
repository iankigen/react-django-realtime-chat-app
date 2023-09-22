from django.contrib.auth import get_user_model
from django.db import models

from .category import Category
from .base_model import BaseModel

User = get_user_model()


class Server(BaseModel):
    str_field = 'name'
    name = models.CharField(max_length=100)
    owner = models.ForeignKey(
        User, related_name='servers', on_delete=models.CASCADE)
    category = models.ForeignKey(
        Category, related_name='servers', on_delete=models.SET_NULL, blank=True, null=True)
    description = models.CharField(max_length=255, blank=True, null=True)
    members = models.ManyToManyField(User, related_name='membership', blank=True)

