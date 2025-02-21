from rest_framework import generics
from .models import Account
from .serializers import AccountSignUpSerializer

class AccountSignUpView(generics.CreateAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSignUpSerializer

