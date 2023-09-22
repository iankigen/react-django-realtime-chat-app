from rest_framework.serializers import ModelSerializer

from server.models import Channel


class ChannelSerializer(ModelSerializer):
    class Meta:
        model = Channel
        fields = ['id', 'name', 'owner', 'topic', 'server', 'created_at', 'updated_at']
        read_only_fields = ['id', ]
