from django.urls import path, re_path
from rest_framework import permissions
from api.views import VideoObjView,ListVideo,CreateVideo,ListCat


urlpatterns = [
    path("api/video/", ListVideo.as_view(), name="ListVideo"),
    path("api/video/create", CreateVideo.as_view(), name="CreateVideo"),
    path("api/video/<id>", VideoObjView.as_view(), name="ditale_video"),
    path("api/category/", ListCat.as_view(), name="category"),
]
