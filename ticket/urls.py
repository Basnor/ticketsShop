from rest_framework import routers
from .api import TicketByTypeViewSet

router = routers.DefaultRouter()
router.register('tickets/api', TicketByTypeViewSet, 'ticket')

urlpatterns = router.urls