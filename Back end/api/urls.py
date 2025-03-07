from django.urls import path, re_path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from api.views import ListCategory,ListVideo,VideoDetailView,ChannelDetailView,ListVideoShort


urlpatterns = [
    path("api/video/", ListVideo.as_view(), name="ListVideo"),
    path("api/short_video/", ListVideoShort.as_view(), name="ListVideoShort"),
    path("api/video/<id>", VideoDetailView.as_view(), name="ditale_video"),
    path("api/category/<title>", ListCategory.as_view(), name="category"),
    path("api/channel/<title>", ChannelDetailView.as_view(), name="channel"),
]