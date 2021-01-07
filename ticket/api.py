from .models import Type, TicketDetail
from rest_framework import viewsets, permissions
from .serializers import TypeSerializer, TicketDetailSerializer


class TicketByTypeViewSet(viewsets.ModelViewSet):
    queryset = Type.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TypeSerializer

class TicketViewSet(viewsets.ModelViewSet):
    queryset = TicketDetail.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TicketDetailSerializer