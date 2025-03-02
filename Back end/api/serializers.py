from rest_framework import serializers, viewsets, permissions
from django.contrib.auth.models import User
from video.models import Category,VIDEO,Channel
from account.models import Account,AccountManager
from django.utils import timezone
from datetime import timedelta

class VideoSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    uploaded_by = serializers.StringRelatedField()
    views = serializers.SerializerMethodField()
    count_like = serializers.SerializerMethodField()
    time_since_uploaded = serializers.SerializerMethodField()
    class Meta:
        model = VIDEO
        fields = '__all__'

    def get_views(self, obj):
        return self.format_large_number(obj.views)


    def get_count_like(self, obj):
        return self.format_large_number(obj.count_like)


    def format_large_number(self, number):
        if number >= 1_000_000:
            return f"{number / 1_000_000:.1f}M"
        elif number >= 1_000:
            return f"{number / 1_000:.1f}K"
        else:
            return str(number)

    def get_time_since_uploaded(self, obj):
        # محاسبه تفاوت زمانی بین زمان فعلی و زمان آپلود
        now = timezone.now()
        time_difference = now - obj.uploaded_at

        # بررسی اختلاف زمانی
        if time_difference < timedelta(minutes=1):
            return f"{int(time_difference.total_seconds())} seconds"
        elif time_difference < timedelta(hours=1):
            minutes = int(time_difference.total_seconds() // 60)
            return f"{minutes} minutes"
        elif time_difference < timedelta(days=1):
            hours = int(time_difference.total_seconds() // 3600)
            return f"{hours} hours"
        elif time_difference < timedelta(weeks=1):
            days = int(time_difference.total_seconds() // 86400)
            return f"{days} days"
        elif time_difference < timedelta(weeks=4):
            weeks = int(time_difference.total_seconds() // 604800)
            return f"{weeks} weeks"
        elif time_difference < timedelta(weeks=52):
            months = int(time_difference.total_seconds() // 2592000)
            return f"{months} months"
        else:
            years = int(time_difference.total_seconds() // 31536000)
            return f"{years} years"

class CategorySerializer(serializers.ModelSerializer):
    child_videos = VideoSerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ['id', 'title', 'slug', 'child_videos']



class ChannelSerializer(serializers.ModelSerializer):
    channel_videos = VideoSerializer(many=True, read_only=True)  # نمایش لیست ویدیوها در چنل

    class Meta:
        model = Channel
        fields = [
            "id", "title", "profile_picture", "description",
            "more_link", "subcribers", "count_video", "channel_videos"
        ]



class AccountSignUpSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Account
        fields = ('id','email', 'username', 'password', 'profile_picture')

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = Account(**validated_data)
        user.set_password(password)
        user.save()



        return user

class AccountLogInSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'