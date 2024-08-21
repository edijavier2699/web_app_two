from django.shortcuts import render
from .models import Subscriber
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .serializers import SubscriberSerializer

class UserListView(generics.ListCreateAPIView):
    queryset = Subscriber.objects.all()
    serializer_class = SubscriberSerializer

    def post(self, request, *args, **kwargs):
        """
        Override the post method to handle custom validation.
        """
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)  # This will raise an error if validation fails
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
