from django.db import models
from PIL import Image
from uuid import uuid4
from django.utils.html import format_html
from django.utils.text import slugify
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from django.core.validators import FileExtensionValidator
from django.conf import settings


#  category
# __________________________________________________________________________________
# Channel Model
class Channel(models.Model):
    title = models.CharField(max_length=255)
    profile_picture = models.ImageField(upload_to="media/profile", blank=True)
    description = models.TextField(blank=True, null=True)
    more_link = models.URLField(max_length=200)
    subcribers = models.IntegerField(default=0)
    count_video = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)

    class Meta:
        verbose_name = "کانال"
        verbose_name_plural = "کانال"
        ordering = ['created_at']

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.count_video = self.videos.count()
        super().save(*args, **kwargs)

# Category Model
class Category(models.Model):
    title = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "دسته‌بندی"
        verbose_name_plural = "دسته‌بندی‌ها"
        ordering = ['created_at']

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

# VIDEO Model
class VIDEO(models.Model):
    category = models.ForeignKey(
        Category, null=True, blank=True, on_delete=models.PROTECT, related_name="child_videos"
    )
    title = models.CharField(max_length=255)
    thumbnail = models.ImageField(
        upload_to="media/thumbnails",
        validators=[FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png','avif','webp'])]
    )
    video_url = models.URLField(max_length=256, default="")
    uuid = models.UUIDField(default=uuid4, unique=True, editable=False)
    description = models.TextField(blank=True, null=True)
    views = models.PositiveIntegerField(default=0)
    count_like = models.PositiveIntegerField(default=0)
    uploaded_by = models.ForeignKey(Channel, on_delete=models.CASCADE, related_name="channel_videos")
    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "ویدئو"
        verbose_name_plural = "ویدئوها"
        ordering = ['-uploaded_by']

    def __str__(self):
        return self.title

# Comment Model
class Comment(models.Model):
    video = models.ForeignKey(
        VIDEO, on_delete=models.CASCADE, related_name='comments'
    )
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    text = models.TextField()
    count_like = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    replay = models.ForeignKey(
        'self',
        null=True,
        blank=True,
        related_name="replies",  # Use a different related_name for the reverse relation
        on_delete=models.SET_NULL,
        verbose_name="پاسخ",
    )

    class Meta:
        verbose_name = "نظر"
        verbose_name_plural = "نظرات"
        ordering = ['-created_at']

    def __str__(self):
        return f"comment for : {self.video.title}"

# Playlist Model
class Playlist(models.Model):
    name = models.CharField(max_length=255)
    channel = models.ForeignKey(Channel, on_delete=models.CASCADE, related_name="playlists")
    videos = models.ManyToManyField(VIDEO, related_name='playlists')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name} by {self.channel.title}'
