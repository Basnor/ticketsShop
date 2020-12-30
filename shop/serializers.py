
from djoser.serializers import UserCreateSerializer, UserSerializer
from rest_framework import serializers
from .models import Event, Organizer, SocialLinks
from django.contrib.auth import get_user_model
User = get_user_model()


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'name', 'password')
        

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
        