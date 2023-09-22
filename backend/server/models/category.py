from django.db import models
from django.db.models.signals import pre_save, pre_delete
from django.dispatch import receiver

from .base_model import BaseModel
from .utils.image_management import (
    remove_extra_file_on_update,
    remove_obj_files_on_delete
)


def category_icon_path(instance, filename):
    return f"category/{instance.pk}/icons/{filename}"


class Category(BaseModel):
    str_field = 'name'
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    icon = models.ImageField(upload_to=category_icon_path, null=True, blank=True)

    class Meta:
        verbose_name_plural = 'Categories'


@receiver(pre_save, sender=Category)
def remove_extra_icon_on_update(sender, instance, **kwargs):
    remove_extra_file_on_update(sender, instance, file_fields=['icon'])


@receiver(pre_delete, sender=Category)
def delete_category_files(sender, instance, **kwargs):
    remove_obj_files_on_delete(sender, instance, file_fields=['icon'])
