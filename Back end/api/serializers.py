from rest_framework import serializers, viewsets, permissions
from django.contrib.auth.models import User
from video.models import Category,VIDEO,Channel,VIDEO_SHORT
from account.models import Account,AccountManager
from django.utils import timezone
from datetime import timedelta

class VideoShortSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    class Meta:
        model = VIDEO_SHORT
        fields = '__all__'

class ChannelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Channel
        fields = [
            "id", "title", "profile_picture", "description", 
            "more_link", "subcribers", "count_video", 
        ]

class VideoSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    uploaded_by = ChannelSerializer()
    views = serializers.SerializerMethodField()
    count_like = serializers.SerializerMethodField()
    
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

            
class CategorySerializer(serializers.ModelSerializer):
    child_videos = VideoSerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ['id', 'title', 'slug', 'child_videos']

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

        # اضافه کردن کاربر به گروه 'users'
        # group, created = Group.objects.get_or_create(name='users')
        # user.groups.add(group)

        return user
    
class AccountLogInSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'