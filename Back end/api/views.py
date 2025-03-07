from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView,RetrieveAPIView
from rest_framework.views import APIView
from video.models import Category, VIDEO,Channel,VIDEO_SHORT
from api.serializers import CategorySerializer, VideoSerializer,ChannelSerializer,VideoShortSerializer

# category
class ListCategory(RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = "title"

    
# short video
class ListVideoShort(ListAPIView):
    queryset = VIDEO_SHORT.objects.all()
    serializer_class = VideoShortSerializer
    

# video
class ListVideo(ListAPIView):
    queryset = VIDEO.objects.all()
    serializer_class = VideoSerializer
    # permission_classes = [IsAuthenticated]  # در صورت نیاز فعال کنید


# video_detail
class VideoDetailView(RetrieveUpdateDestroyAPIView):
    queryset = VIDEO.objects.all()
    serializer_class = VideoSerializer
    lookup_field = "id"

# channel
class ChannelDetailView(RetrieveAPIView):
    queryset = Channel.objects.all()
    serializer_class = ChannelSerializer
    lookup_field = "title"
    
