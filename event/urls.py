from rest_framework import routers
from .api import EventViewSet

router = routers.DefaultRouter()
router.register('event/api', EventViewSet, 'event')

urlpatterns = router.urls
