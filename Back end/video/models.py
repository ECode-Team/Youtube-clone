from django.db import models
from uuid import uuid4
from django.utils.text import slugify
from django.core.validators import FileExtensionValidator
from django.conf import settings

class Channel(models.Model):
    title = models.CharField(max_length=255)
    profile_picture = models.ImageField(upload_to="media/profile", blank=True)
    description = models.TextField(blank=True, null=True)
    more_link = models.URLField(max_length=200)
    subcribers = models.IntegerField(default=0)
    count_video = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "کانال"
        verbose_name_plural = "کانال"
        ordering = ['created_at']

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.count_video = self.channel_videos.count()
        super().save(*args, **kwargs)

class Category(models.Model):
    title = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "دسته‌بندی"
        verbose_name_plural = "دسته‌بندی‌ها"
        ordering = ['created_at']

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.title)
            unique_slug = base_slug
            counter = 1
            while Category.objects.filter(slug=unique_slug).exists():
                unique_slug = f"{base_slug}-{counter}"
                counter += 1
            self.slug = unique_slug
        super().save(*args, **kwargs)

class VIDEO(models.Model):
    category = models.ForeignKey(
        Category, null=True, blank=True, on_delete=models.PROTECT, related_name="child_videos"
    )
    title = models.CharField(max_length=255)
    thumbnail = models.ImageField(
        upload_to="media/thumbnails",
        validators=[FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png', 'avif', 'webp'])]
    )
    video_url = models.URLField(max_length=256, default="https://www.youtube.com/embed/")
    uuid = models.UUIDField(default=uuid4, unique=True, editable=False)
    description = models.TextField(blank=True, null=True)
    views = models.PositiveIntegerField(default=0)
    count_like = models.PositiveIntegerField(default=0)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "ویدئو"
        verbose_name_plural = "ویدئوها"
        ordering = ['-uploaded_at']

    def __str__(self):
        return self.title



# short video model
class VIDEO_SHORT(models.Model):
    category = models.ForeignKey(
        Category, null=True, blank=True, on_delete=models.PROTECT, related_name="child_short_videos"
    )
    title = models.CharField(max_length=255)
    thumbnail = models.ImageField(
        upload_to="media/thumbnails",
        validators=[FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png','avif','webp'])]
    )
    video_url = models.URLField(max_length=256, default="https://www.youtube.com/embed/")
    uuid = models.UUIDField(default=uuid4, unique=True, editable=False)
    description = models.TextField(blank=True, null=True)
    views = models.PositiveIntegerField(default=0)
    count_like = models.PositiveIntegerField(default=0)
    uploaded_by = models.ForeignKey(Channel, on_delete=models.CASCADE, related_name="channel_short_videos")

    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "ویدئو"
        verbose_name_plural = " ویدئوهای کوتاه"  
        ordering = ['-uploaded_at']

    def __str__(self):
        return self.title
    
class Comment(models.Model):
    video = models.ForeignKey(VIDEO, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    text = models.TextField()
    count_like = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    replay = models.ForeignKey('self', null=True, blank=True, on_delete=models.SET_NULL, related_name="replies")

    class Meta:
        verbose_name = "نظر"
        verbose_name_plural = "نظرات"
        ordering = ['-created_at']

    def __str__(self):
        return f"Comment by {self.user} on {self.video.title}"

class Playlist(models.Model):
    name = models.CharField(max_length=255)
    channel = models.ForeignKey(Channel, on_delete=models.CASCADE, related_name="playlists")
    videos = models.ManyToManyField(VIDEO, related_name='playlists')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name} by {self.channel.title}'