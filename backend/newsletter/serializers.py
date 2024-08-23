from rest_framework import serializers
from .models import Subscriber,ContactedClient

class SubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscriber
        fields = "__all__"

    def validate_email(self, value):
        """
        Check if the email already exists in the database.
        """
        if Subscriber.objects.filter(email=value).exists():
            raise serializers.ValidationError({"email": "This email is already subscribed."})
        return value

class ContactedClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactedClient
        fields = ['name', 'email', 'phone_number']
    
    def create(self, validated_data):
        email = validated_data.get('email')
        if ContactedClient.objects.filter(email=email).exists():
            raise serializers.ValidationError("This email is already registered.")
        return super(ContactedClientSerializer, self).create(validated_data)
