from rest_framework.fields import IntegerField
from rest_framework.serializers import ModelSerializer, SerializerMethodField

from server.models import Server


class ServerSerializer(ModelSerializer):
    members_count = IntegerField(read_only=True)

    class Meta:
        model = Server
        fields = [
            'id', 'name', 'owner', 'category', 'description',
            'channels', 'created_at', 'updated_at', 'members_count'
        ]
        read_only_fields = ['id']
