from django.shortcuts import render
from .models import Subscriber
from rest_framework import generics
from .serializers import SubscriberSerializer

# Create your views here.
class UserListView(generics.ListCreateAPIView):
    queryset = Subscriber.objects.all()
    serializer_class = SubscriberSerializer

    