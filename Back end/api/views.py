from django.shortcuts import render, get_object_or_404, redirect
from video.models import Category, VIDEO
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.serializers import CategorySerializer, VideoSerializer, CreateVideoSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListAPIView,CreateAPIView,UpdateAPIView


# View for the home page
class ListVideo(ListAPIView):
   queryset = VIDEO.objects.all()
   serializer_class = VideoSerializer
   # permission_classes = True

class CreateVideo(CreateAPIView):
   queryset = VIDEO.objects.all()
   serializer_class = CreateVideoSerializer
   # permission_classes = True

class ListCat(ListAPIView):
   queryset = Category.objects.all()
   serializer_class = CategorySerializer



class VideoObjView(APIView):
  permission_classes = (IsAuthenticated,)
  def get(self,request):
      videos = VIDEO.objects.all()
      Serializer = VideoSerializer(instance=videos,many=True)
      return Response(Serializer.data)

  def post(self,request):
     data=request.data
     serializer = CreateVideoSerializer(data=data)
     serializer.is_valid(raise_exception=True)
     serializer.save()
     return Response(serializer.data, status=status.HTTP_201_CREATED)

 

  def put(self,request,id):
     video_obj = VIDEO.objects.get(id=id)
     serializer = CreateVideoSerializer(instance=video_obj,data=request.data)
     serializer.is_valid(raise_exception=True)
     serializer.save()
     return Response(serializer.data, status=status.HTTP_200_OK)
     
     

  def delete(self,request,id):
    video_obj = VIDEO.objects.get(id=id)
    video_obj.delete()

    return Response(status=status.HTTP_204_NO_CONTENT) 

# @api_view(['GET', 'POST'])
# def home_video(request):
#     if request.method == "GET":
#         data = VIDEO.objects.all()
#         Video_Serializer = VideoSerializer(data, many=True)
#         return Response(Video_Serializer.data)
#     if request.method == "POST":
#         REQ_data = request.data
#         Serializer = CreateVideoSerializer(data=REQ_data)
#         Serializer.is_valid(raise_exception=True)
#         Serializer.seve()
#         return Response(Serializer.data, status=status.HTTP_201_CREATED)


# @api_view(['PUT', 'DELETE'])
# def update_video(request, id):
#     if request.method == "PUT":
#         video_obj = VIDEO.objects.get(id=id)

#         Serializer = VideoSerializer(
#             isinstance=video_obj,
#             data=request.data,
#         )
#         Serializer.is_valid(raise_exception=True)

#         Serializer.save()

#         return Response(Serializer.data, status=status.HTTP_200_OK)
#     if request.method == "DELETE":
#         video_obj = VIDEO.objects.get(id=id)
#         video_obj.delete()

#         return Response(status=status.HTTP_204_NO_CONTENT)
