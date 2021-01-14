from rest_framework import serializers
from .models import TicketDetail, Type, Ticket, SocialLinks, Organizer
from event.serializers import EventSerializer


class LinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLinks
        fields = '__all__'


class OrganizerSerializer(serializers.ModelSerializer):
    links = LinksSerializer(many=True, read_only=True)

    class Meta:
        model = Organizer
        fields = '__all__'


class TicketDetailSerializer(serializers.ModelSerializer):
    orgs = OrganizerSerializer(many=True, read_only=True)

    class Meta:
        model = TicketDetail
        fields = '__all__'


class TypeSerializer(serializers.ModelSerializer):
    tickets = TicketDetailSerializer(many=True, read_only=True)

    class Meta:
        model = Type
        fields = '__all__'


class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = '__all__'
