from rest_framework.serializers import ModelSerializer

from server.models import Server
from .channel_serializer import ChannelSerializer
from .user_serializer import UserSerializer


class ServerSerializer(ModelSerializer):
    channels = ChannelSerializer(many=True)
    owner = UserSerializer()
    members = UserSerializer(many=True)

    class Meta:
        model = Server
        fields = [
            'id', 'name', 'owner', 'category', 'description',
            'members', 'channels', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', ]
