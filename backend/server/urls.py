from rest_framework.routers import DefaultRouter

from .views import ServerListViewSet

router = DefaultRouter()
router.register('server/select', ServerListViewSet, basename='server_viewset')

urlpatterns = router.urls
