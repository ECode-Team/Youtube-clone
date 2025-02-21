from rest_framework import serializers
from .models import Account
from django.contrib.auth.models import Group

class AccountSignUpSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Account
        fields = ('email', 'username', 'password', 'first_name', 'last_name')

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = Account(**validated_data)
        user.set_password(password)
        user.save()

        # اضافه کردن کاربر به گروه 'users'
        # group, created = Group.objects.get_or_create(name='users')
        # user.groups.add(group)

        return user