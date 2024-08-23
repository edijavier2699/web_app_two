from django.shortcuts import render
from .models import Subscriber,ContactedClient
from rest_framework import generics, serializers
from rest_framework.response import Response
from rest_framework import status
from .serializers import SubscriberSerializer,ContactedClientSerializer
from .welcomeEmail import send_welcome_email 
from .contactFormEmail import contactFormEmail

class UserListView(generics.ListCreateAPIView):
    queryset = Subscriber.objects.all()
    serializer_class = SubscriberSerializer

    def post(self, request, *args, **kwargs):
        """
        Override the post method to handle custom validation and send a welcome email.
        """
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)  # This will raise an error if validation fails
        self.perform_create(serializer)
        
        # Send a welcome email
        email = serializer.validated_data['email']
        send_welcome_email(email) 

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)



class ContactedClientListCreateView(generics.ListCreateAPIView):
    queryset = ContactedClient.objects.all()
    serializer_class = ContactedClientSerializer

    def create(self, request, *args, **kwargs):
        # first, try to validate and create the data
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            contactFormEmail(request.data['email'], request.data['name'],request.data['user_message'],request.data['phone_number'])
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except serializers.ValidationError as e:
            # if already exist, we dont save it  but we still we safe the email for us with the form 
            if "This email is already registered." in str(e):
                contactFormEmail(request.data['email'], request.data['name'],request.data['user_message'],request.data['phone_number'])
                return Response({"detail": "This email is already registered, but a contact email has been sent."}, status=status.HTTP_200_OK)
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
