from django.contrib import admin
from .models import Category,Comment,VIDEO,Playlist,Channel,VIDEO_SHORT


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
  list_display = ["title","created_at"]
  prepopulated_fields = {"slug": ["title"]}


class CommentAdmin(admin.TabularInline):
  model = Comment
  extra = 1

@admin.register(VIDEO_SHORT)
class VideoAdmin(admin.ModelAdmin):
  list_display = ["title","thumbnail","uploaded_by"]


@admin.register(VIDEO)
class VideoAdmin(admin.ModelAdmin):
  list_display = ["title","thumbnail","category","uploaded_by"]
  inlines = [CommentAdmin]

@admin.register(Channel)
class ChannelAdmin(admin.ModelAdmin):
  list_display = ["title","profile_picture","subcribers","count_video"]


