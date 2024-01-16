from rest_framework.routers import DefaultRouter

from .views import ServerListViewSet, CategoryListViewSet

router = DefaultRouter()
router.register('server/select', ServerListViewSet, basename='server_viewset')
router.register('server/category', CategoryListViewSet, basename='category_viewset')

urlpatterns = router.urls
