from rest_framework import routers
from .api import EventViewSet

router = routers.DefaultRouter()
router.register('api/shop', EventViewSet, 'shop')

urlpatterns = router.urls
