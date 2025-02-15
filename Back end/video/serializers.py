from rest_framework import serializers, viewsets, permissions
from django.contrib.auth.models import User
from .models import Category,VIDEO


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = VIDEO
        fields = '__all__'
