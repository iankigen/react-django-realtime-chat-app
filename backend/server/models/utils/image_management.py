def remove_extra_file_on_update(sender, instance, file_fields=None):
    if not instance.pk:
        return
    objects = sender.objects.filter(pk=instance.pk)
    if objects.exists():
        obj = objects.last()
        for field in file_fields:
            if getattr(obj, field) and getattr(obj, field).name != instance.icon.name:
                getattr(obj, field).delete(save=False)


def remove_obj_files_on_delete(sender, instance, file_fields=None):
    if not instance.pk:
        return
    objects = sender.objects.filter(pk=instance.pk)
    if objects.exists():
        obj = objects.last()
        for field in file_fields:
            getattr(obj, field).delete(save=False)