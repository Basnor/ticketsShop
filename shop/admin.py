from django.contrib import admin
from .models import Event, Organizer


# Register your models here.

class EventAdmin(admin.ModelAdmin):
    list_display = ('id', 'eventTitle', 'keyWords',  'shortDescription', 'longDescription', 'image', 'startDate', 'endDate')
    list_display_links = ('id', 'eventTitle')

admin.site.register(Event, EventAdmin)


class OrganizerAdmin(admin.ModelAdmin):
    list_display = ('id', 'eventId', 'fName',  'sName', 'photo', 'about')
    list_display_links = ('id', 'eventId')

admin.site.register(Organizer, OrganizerAdmin)
