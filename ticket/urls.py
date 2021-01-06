from rest_framework import routers
from .api import TicketDetailViewSet

router = routers.DefaultRouter()
router.register('ticket/api', TicketDetailViewSet, 'ticket')

urlpatterns = router.urls