from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import UserAccount


# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'name', 'is_superuser', 'first_name', 'last_name', 'password')
    list_display_links = ('id', 'email')

admin.site.register(UserAccount, UserAdmin)
