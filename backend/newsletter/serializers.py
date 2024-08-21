from rest_framework import serializers
from .models import Subscriber

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
