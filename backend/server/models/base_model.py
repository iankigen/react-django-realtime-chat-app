from django.db import models


class BaseModel(models.Model):
    str_field = 'pk'
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

    def __str__(self):
        return f"{self.__class__.__name__} {getattr(self, self.str_field)}"
