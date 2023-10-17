from rest_framework.serializers import ModelSerializer

from server.models import Category


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']
