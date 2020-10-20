from django.contrib import admin
from .models import Event


# Register your models here.

class EventAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'keyWord',  'description', 'startData', 'endData')
    list_display_links = ('id', 'title')


admin.site.register(Event, EventAdmin)
