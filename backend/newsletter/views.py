from django.shortcuts import render
from .models import Subscriber,ContactedClient
from rest_framework import generics, serializers
from rest_framework.response import Response
from rest_framework import status
from .serializers import DemoSerializer,ContactedClientSerializer
from .welcomeEmail import send_demo_booking_email 
from .waitlistEmail import send_waitlist_email
from .contactFormEmail import contactFormEmail
from django.core.exceptions import ValidationError


class DemoUserListView(generics.ListCreateAPIView):
    queryset = Subscriber.objects.all()
    serializer_class = DemoSerializer

    def post(self, request, *args, **kwargs):
        """
        Override the post method to handle custom validation and send a welcome email.
        """
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)  # This will raise an error if validation fails
        self.perform_create(serializer)
        
        # Send a welcome email
        email = serializer.validated_data['email']
        send_waitlist_email(email) 

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)



class ContactedClientListCreateView(generics.ListCreateAPIView):
    queryset = ContactedClient.objects.all()
    serializer_class = ContactedClientSerializer
    def create(self, request, *args, **kwargs):
        print(request.data)
        serializer = self.get_serializer(data=request.data)
        email = request.data.get('email')
        is_demo = request.data.get('demo', False) 

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
            if is_demo:
                send_demo_booking_email(email)  # Send demo email with only the email address
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
            if is_demo:
                send_demo_booking_email(validated_data['email'])  # Send demo email with only the email address

            return Response(serializer.data, status=status.HTTP_201_CREATED)

        except ValidationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
