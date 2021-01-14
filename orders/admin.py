from django.contrib import admin
from .models import Order, OrderItem


# Register your models here.


class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'order', 'num')
    list_display_links = ('id', 'order')

admin.site.register(OrderItem, OrderItemAdmin)


class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'account', 'created')
    list_display_links = ('id', 'account')

admin.site.register(Order, OrderAdmin)
