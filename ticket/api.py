from .models import TicketDetail
from rest_framework import viewsets, permissions
from .serializers import TicketDetailSerializer


class TicketDetailViewSet(viewsets.ModelViewSet):
    queryset = TicketDetail.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TicketDetailSerializer
