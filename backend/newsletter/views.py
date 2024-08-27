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
        # Validate and sanitize inputs
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)

            # Define the required fields and their corresponding error messages
            required_fields = {
                'name': "Name field is required.",
                'phone_number': "Phone number field is required.",
                'user_message': "Message field is required."
            }

            # Iterate over the required fields, sanitize, and check if they are empty
            sanitized_data = {}
            for field, error_message in required_fields.items():
                value = request.data.get(field, '').strip()
                if not value:
                    return Response({"detail": error_message}, status=status.HTTP_400_BAD_REQUEST)
                sanitized_data[field] = value

            # Use the sanitized data
            name = sanitized_data['name']
            phone_number = sanitized_data['phone_number']
            user_message = sanitized_data['user_message']
            
            # After all validations, save the contact and send email
            self.perform_create(serializer)
            contactFormEmail(request.data['email'], name, user_message, phone_number)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except serializers.ValidationError as e:
            # Handle case where email is already registered but still send the contact form email
            if "This email is already registered." in str(e):
                contactFormEmail(request.data['email'], request.data['name'], request.data['user_message'], request.data['phone_number'])
                return Response({"detail": "This email is already registered, but a contact email has been sent."}, status=status.HTTP_200_OK)
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except ValidationError as ve:
            return Response({"detail": str(ve)}, status=status.HTTP_400_BAD_REQUEST)