from django.db.models import Count
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.viewsets import ModelViewSet
from server.models import (
    Category,
    Server,
)
from server.serializers import (
    ServerSerializer,
)


class ServerListViewSet(ModelViewSet):
    serializer_class = ServerSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category', 'owner']
    permission_classes = [AllowAny]

    # def get_permissions(self):
    #     permission_classes = [IsAuthenticated]
    #     if self.action == 'create':
    #         permission_classes = [IsAdminUser]
    #     return [permission() for permission in permission_classes]

    def get_queryset(self):
        return Server.objects.all().annotate(members_count=Count('members'))
