from django.contrib import admin

from .models import (
    Channel, Category, Server
)


@admin.register(Channel)
class ChannelAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'topic', 'owner', 'server')
    list_filter = ('topic', 'owner')


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')


@admin.register(Server)
class ServerAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'category', 'owner')

