from rest_framework import serializers
from .models import Event, Organizer


class OrganizerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organizer
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):
    orgs = OrganizerSerializer(many=True, read_only=True)

    class Meta:
        model = Event
        fields = '__all__'
        