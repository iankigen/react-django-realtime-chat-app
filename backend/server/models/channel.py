from django.contrib.auth import get_user_model
from django.db import models

from .base_model import BaseModel
from .server import Server

User = get_user_model()


class Channel(BaseModel):
    str_field = 'name'
    name = models.CharField(max_length=100)
    topic = models.CharField(max_length=100)
    owner = models.ForeignKey(User, related_name='channels', on_delete=models.CASCADE)
    server = models.ForeignKey(Server, related_name='channels', on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        self.name = self.name.lower()
        super().save(*args, **kwargs)
