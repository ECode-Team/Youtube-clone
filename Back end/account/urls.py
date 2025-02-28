from django.urls import path
from .views import AccountSignUpView,LoginAPIView

urlpatterns = [
    path('signup/', AccountSignUpView.as_view(), name='signup'),
    path('login/', LoginAPIView.as_view(), name='login'),
]
