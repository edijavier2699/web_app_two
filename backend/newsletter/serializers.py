from rest_framework import serializers
from .models import Subscriber,ContactedClient,RequestedInvitation

class DemoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscriber
        fields = "__all__"

    def validate_email(self, value):
        """
        Validate that the email is in a proper format and that it does not already exist in the database.
        WHEN USING filter, ORM automatically prevent us from sql injections
        """
        # Check if the email has a valid format
        if not serializers.EmailField().run_validation(value):
            raise serializers.ValidationError("Please enter a valid email address.")
        
        # Check if the email already exists in the database
        if Subscriber.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already subscribed.")
        
        return value
    

class ContactedClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactedClient
        fields = [
            'name',
            'surname',
            'email',
            'phone_number',
            'message',
            'property_owner',
            'property_type',
            'property_county',
        ]

    def validate_email(self, value):
        """
        Validate that the email is in a proper format and that it does not already exist in the ContactedClient model.
        """
        # Check if the email has a valid format
        if not serializers.EmailField().run_validation(value):
            raise serializers.ValidationError("Please enter a valid email address.")

        return value
    
class RequestInvitationSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequestedInvitation  # Especifica tu modelo
        fields = '__all__'  # Incluye todos los campos del modelo