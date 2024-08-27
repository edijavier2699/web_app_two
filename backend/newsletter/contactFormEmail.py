from django.core.mail import send_mail
from django.conf import settings

def contactFormEmail(email, name, user_message, phone_number):
    subject = f'New Contact Request from {name}'

    message = f'''
    Dear Team,

    You have received a new contact request. Please find the details below:

    Message:
    "{user_message}"

    Personal Information:
    - Name: {name}
    - Email: {email}
    - Phone Number: {phone_number}

    Please respond to this inquiry at your earliest convenience.

    Best regards,
    Your Website Contact Form
    '''

    from_email = settings.EMAIL_HOST_USER

    try:
        send_mail(subject, message, from_email, [email])
        return True
    except Exception as e:
        print(f'Error sending email: {e}')
        return False





