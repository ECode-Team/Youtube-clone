from rest_framework import serializers, viewsets, permissions
from django.contrib.auth.models import User
from video.models import Category,VIDEO
from account.models import Account,AccountManager


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = VIDEO
        fields = '__all__'

class CreateVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = VIDEO
        fields = '__all__'


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