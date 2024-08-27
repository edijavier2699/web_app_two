from django.shortcuts import render
from .models import Subscriber,ContactedClient
from rest_framework import generics, serializers
from rest_framework.response import Response
from rest_framework import status
from .serializers import SubscriberSerializer,ContactedClientSerializer
from .welcomeEmail import send_welcome_email 
from .contactFormEmail import contactFormEmail
from django.core.exceptions import ValidationError


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
        serializer = self.get_serializer(data=request.data)
        print(f"Incoming data: {request.data}")

        # Check if the email already exists in the ContactedClient model
        email = request.data.get('email')
        if email and ContactedClient.objects.filter(email=email).exists():
            # Send email even if the email is already registered
            contactFormEmail(
                email=email,
                name=request.data.get('name', ''),
                user_message=request.data.get('message', ''),
                phone_number=request.data.get('phone_number', None),
                surname=request.data.get('surname', None),
                property_owner=request.data.get('property_owner', False),
                property_type=request.data.get('property_type', None),
                property_county=request.data.get('property_county', None)
            )
            # Return a response indicating the email is already registered
            return Response({"detail": "This email is already registered, but a contact email has been sent."}, status=status.HTTP_200_OK)

        try:
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)

            validated_data = serializer.validated_data
            contactFormEmail(
                email=validated_data['email'],
                name=validated_data['name'],
                user_message=validated_data['message'],
                phone_number=validated_data.get('phone_number', None),
                surname=validated_data.get('surname', None),
                property_owner=validated_data.get('property_owner', False),
                property_type=validated_data.get('property_type', None),
                property_county=validated_data.get('property_county', None)
            )

            return Response(serializer.data, status=status.HTTP_201_CREATED)

        except ValidationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)