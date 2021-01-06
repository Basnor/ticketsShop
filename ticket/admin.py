from django.contrib import admin
from .models import TicketDetail, Type, Ticket


# Register your models here.


class TicketDetailAdmin(admin.ModelAdmin):
    list_display = ('id', 'ticketTitle', 'price', 'numLeft', 'numMax', 'startDate', 'endDate', 'ticketType')
    list_display_links = ('id', 'ticketTitle')

admin.site.register(TicketDetail, TicketDetailAdmin)


class TypeAdmin(admin.ModelAdmin):
    list_display = ('id', 'ticketType', 'info')
    list_display_links = ('id', 'ticketType')

admin.site.register(Type, TypeAdmin)


class TicketAdmin(admin.ModelAdmin):
    list_display = ('id', 'ticket', 'event')
    list_display_links = ('id', 'ticket', 'event')

admin.site.register(Ticket, TicketAdmin)

