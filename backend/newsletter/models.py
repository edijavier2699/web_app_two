from django.db import models

# Create your models here.

class Subscriber(models.Model):
    email = models.EmailField(unique=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
    
    class Meta():
        ordering = ["subscribed_at"]

class ContactedClient(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100, blank=True, null=True)  # Nuevo campo para el apellido
    email = models.EmailField()
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    message = models.TextField(blank=True, null=True)
    property_owner = models.BooleanField(default=False) 
    property_type = models.CharField(max_length=100, blank=True, null=True)  
    property_county = models.CharField(max_length=100, blank=True, null=True)  
    contacted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name} ({self.email})'

    class Meta:
        ordering = ['contacted_at']


class RequestedInvitation(models.Model):
    first_name = models.CharField(max_length=100, verbose_name="First Name")
    last_name = models.CharField(max_length=100, verbose_name="Last Name")
    email_address = models.EmailField(verbose_name="Email Address")
    how_heard_about_us = models.CharField(max_length=200, verbose_name="How Heard About Us")
    contacted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name}"
    
    class Meta:
        ordering = ["contacted_at"]