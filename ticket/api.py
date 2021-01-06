from .models import Type
from rest_framework import viewsets, permissions
from .serializers import TypeSerializer


class TicketByTypeViewSet(viewsets.ModelViewSet):
    queryset = Type.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TypeSerializer

