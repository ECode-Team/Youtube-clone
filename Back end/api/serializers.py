from rest_framework import serializers, viewsets, permissions
from django.contrib.auth.models import User
from video.models import Category,VIDEO,Channel
from account.models import Account,AccountManager

class VideoSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    uploaded_by = serializers.StringRelatedField()
    class Meta:
        model = VIDEO
        fields = '__all__'

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