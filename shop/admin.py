from django.contrib import admin
from .models import Event


# Register your models here.

class EventAdmin(admin.ModelAdmin):
    list_display = ('id', 'eventTitle', 'keyWords',  'shortDescription', 'longDescription', 'image', 'startDate', 'endDate')
    list_display_links = ('id', 'eventTitle')


admin.site.register(Event, EventAdmin)
