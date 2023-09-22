from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

from server.models import (
    Category,
    Server,
)
from server.serializers import (
    ServerSerializer,
)


class ServerListViewSet(ViewSet):
    queryset = Server.objects.all()

    def list(self, request):
        category = request.query_params.get('category')
        user = request.query_params.get('user')
        if category:
            self.queryset = self.queryset.filter(category_id=category)
        if user:
            self.queryset = self.queryset.filter(owner_id=user)

        data = ServerSerializer(self.queryset, many=True).data
        return Response(data)

    def retrieve(self, request, pk):
        server = self.get_object(pk)
        data = ServerSerializer(server, many=False).data
        return Response(data)

    def get_object(self, pk):
        return self.queryset.get(pk=pk)

    def get_permissions(self):
        permission_classes = [IsAuthenticated]
        if self.action == 'create':
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]
