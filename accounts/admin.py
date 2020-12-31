from django.contrib import admin
from .models import UserAccount


# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'name', 'password', 'is_superuser', 'is_staff', 'is_active')
    list_display_links = ('id', 'email')

admin.site.register(UserAccount, UserAdmin)
