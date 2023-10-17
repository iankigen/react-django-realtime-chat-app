from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.viewsets import ModelViewSet
from server.models import (
    Category,
)
from server.serializers import (
    CategorySerializer,
)


class CategoryListViewSet(ModelViewSet):
    serializer_class = CategorySerializer
    filter_backends = [DjangoFilterBackend]
    permission_classes = [AllowAny]

    # def get_permissions(self):
    #     permission_classes = [IsAuthenticated]
    #     if self.action == 'create':
    #         permission_classes = [IsAdminUser]
    #     return [permission() for permission in permission_classes]

    def get_queryset(self):
        return Category.objects.all()
