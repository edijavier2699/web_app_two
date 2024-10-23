from django.shortcuts import render
from .models import Subscriber,ContactedClient,RequestInvitationClients
from rest_framework import generics, serializers
from rest_framework.response import Response
from rest_framework import status
from .serializers import DemoSerializer,ContactedClientSerializer,RequestInvitationSerializer
from .welcomeEmail import send_demo_booking_email 
from .waitlistEmail import send_waitlist_email
from .contactFormEmail import contactFormEmail
from django.core.exceptions import ValidationError
from rest_framework.views import APIView
import requests
from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string



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




class SendNewsletter(APIView):
    def post(self, request):
        try:
            # Obtén los datos del cuerpo de la solicitud
            recipient_email = request.data.get('recipientEmail')
            first_title = request.data.get('firstTitle')
            first_description = request.data.get('firstDescription')
            second_category = request.data.get('secondCategory')
            second_title = request.data.get('secondTitle')
            second_image_url = request.data.get('secondImageUrl')
            second_description = request.data.get('secondDescription')
            second_link = request.data.get('secondLink')
            third_category = request.data.get('thirdCategory')
            third_title = request.data.get('thirdTitle')
            third_image_url = request.data.get('thirdImageUrl')
            third_description = request.data.get('thirdDescription')
            third_link = request.data.get('thirdLink')
            fourth_category = request.data.get('fourthCategory')
            fourth_title = request.data.get('fourthTitle')
            fourth_image_url = request.data.get('fourthImageUrl')
            fourth_description = request.data.get('fourthDescription')
            fourth_link = request.data.get('fourthLink')
            article_url_one = request.data.get('articleUrlOne')
            article_link_title_one = request.data.get('articleLinkTitleOne')
            article_url_two = request.data.get('articleUrlTwo')
            article_link_title_two = request.data.get('articleLinkTitleTwo')
            article_url_three = request.data.get('articleUrlThree')
            article_link_title_three = request.data.get('articleLinkTitleThree')
            article_url_four = request.data.get('articleUrlFour')
            article_link_title_four = request.data.get('articleLinkTitleFour')
            conclusion = request.data.get('conclusion')

            # Validar que se recibieron los parámetros obligatorios
            if not recipient_email:
                return Response({"error": "Faltan parámetros 'email'."}, status=status.HTTP_400_BAD_REQUEST)

            # Cargar y renderizar la plantilla HTML
            html_content = render_to_string('newsletter01.html', {
                'first_title': first_title,
                'first_description': first_description,
                'second_category': second_category,
                'second_title': second_title,
                'second_image_url': second_image_url,
                'second_description': second_description,
                'second_link': second_link,
                'third_category': third_category,
                'third_title': third_title,
                'third_image_url': third_image_url,
                'third_description': third_description,
                'third_link': third_link,
                'fourth_category': fourth_category,
                'fourth_title': fourth_title,
                'fourth_image_url': fourth_image_url,
                'fourth_description': fourth_description,
                'fourth_link': fourth_link,
                'article_url_one': article_url_one,
                'article_link_title_one': article_link_title_one,
                'article_url_two': article_url_two,
                'article_link_title_two': article_link_title_two,
                'article_url_three': article_url_three,
                'article_link_title_three': article_link_title_three,
                'article_url_four': article_url_four,
                'article_link_title_four': article_link_title_four,
                'conclusion': conclusion
            })

            # Configura el correo
            subject = "Tokunize Newsletter"
            from_email = 'tokunizeinfo@gmail.com'  # Cambia esto a tu correo
            to_email = recipient_email

            # Crea el mensaje
            email = EmailMultiAlternatives(
                subject=subject,
                body='Este es el cuerpo en texto plano (opcional)',  # Este es el cuerpo del correo en texto plano
                from_email=from_email,
                to=[to_email]
            )
            email.attach_alternative(html_content, "text/html")  # Adjunta el contenido HTML

            # Envía el correo
            email.send()

            return Response({"message": "Correo enviado con éxito"}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

class InvitationRequestListView(APIView):
    def post(self, request):
        serializer = RequestInvitationSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        serializer.save()  # Si es necesario guardar el objeto en la base de datos
        return Response({"message": "Invitation request successfully send."}, status=status.HTTP_200_OK)