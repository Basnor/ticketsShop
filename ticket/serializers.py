from rest_framework import serializers
from .models import TicketDetail, Type, Ticket
from event.serializers import EventSerializer


class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = '__all__'


class TicketDetailSerializer(serializers.ModelSerializer):
    ticketType = TypeSerializer(many=True, read_only=True)

    class Meta:
        model = TicketDetail
        fields = '__all__'


class TicketSerializer(serializers.ModelSerializer):
    ticket = TicketDetailSerializer(many=True, read_only=True)
    event = EventSerializer(many=True, read_only=True)

    class Meta:
        model = Ticket
        fields = '__all__'
