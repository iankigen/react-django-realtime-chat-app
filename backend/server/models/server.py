from django.contrib.auth import get_user_model
from django.db import models
from django.db.models.signals import pre_save, pre_delete
from django.dispatch import receiver

from .category import Category
from .base_model import BaseModel
from .utils.image_management import (
    remove_extra_file_on_update,
    remove_obj_files_on_delete
)

User = get_user_model()


def server_icon_path(instance, filename):
    return f"server/{instance.pk}/icons/{filename}"


def server_banner_path(instance, filename):
    return f"server/{instance.pk}/banners/{filename}"


class Server(BaseModel):
    str_field = 'name'
    name = models.CharField(max_length=100)
    owner = models.ForeignKey(
        User, related_name='servers', on_delete=models.CASCADE)
    category = models.ForeignKey(
        Category, related_name='servers', on_delete=models.SET_NULL, blank=True, null=True)
    description = models.CharField(max_length=255, blank=True, null=True)
    members = models.ManyToManyField(User, related_name='membership', blank=True)
    icon = models.ImageField(upload_to=server_icon_path, null=True, blank=True)
    banner = models.ImageField(upload_to=server_banner_path, null=True, blank=True)


@receiver(pre_save, sender=Server)
def remove_extra_files_on_update(sender, instance, **kwargs):
    remove_extra_file_on_update(sender, instance, file_fields=['icon', 'banner'])


@receiver(pre_delete, sender=Server)
def delete_category_files(sender, instance, **kwargs):
    remove_obj_files_on_delete(sender, instance, file_fields=['icon', 'banner'])
