from django.shortcuts import render, get_object_or_404, redirect
from .models import  Category,VIDEO
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CategorySerializer,VideoSerializer
from rest_framework import status

# View for the home page
@api_view(['GET','POST'])
def home(request):
  data2 = VIDEO.objects.all()
  Video_Serializer =  VideoSerializer(data2,many=True)

  return Response(Video_Serializer.data)