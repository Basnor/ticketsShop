from rest_framework import routers
from .api import TicketByTypeViewSet, TicketViewSet

router = routers.DefaultRouter()
router.register('tickets/api/type', TicketByTypeViewSet, 'ticket')
router.register('tickets/api', TicketViewSet, 'ticket')

urlpatterns = router.urls