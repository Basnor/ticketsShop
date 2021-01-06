from rest_framework import serializers
from .models import TicketDetail, Type, Ticket
from event.serializers import EventSerializer


class TicketDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = TicketDetail
        fields = '__all__'


class TypeSerializer(serializers.ModelSerializer):
    tickets = TicketDetailSerializer(many=True, read_only=True)

    class Meta:
        model = Type
        fields = '__all__'


class TicketSerializer(serializers.ModelSerializer):
    ticket_detail = TicketDetailSerializer(many=True, read_only=True)
    event = EventSerializer(many=True, read_only=True)

    class Meta:
        model = Ticket
        fields = '__all__'
