from django.urls import path
from .views import AccountSignUpView

urlpatterns = [
    path('signup/', AccountSignUpView.as_view(), name='signup'),
]
