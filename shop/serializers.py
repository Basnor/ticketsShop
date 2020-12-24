from rest_framework import serializers
from .models import Event, Organizer, SocialLinks


class LinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLinks
        fields = '__all__'


class OrganizerSerializer(serializers.ModelSerializer):
    links = LinksSerializer(many=True, read_only=True)

    class Meta:
        model = Organizer
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):
    orgs = OrganizerSerializer(many=True, read_only=True)

    class Meta:
        model = Event
        fields = '__all__'
        