from django.core.mail import send_mail
from django.conf import settings

def contactFormEmail(email, name, user_message, phone_number, surname=None, property_owner=False, property_type=None, property_county=None):
    subject = f'New Contact Request from {name}'

    # Construct the message body
    message = f'''
    Dear Team,

    You have received a new contact request. Please find the details below:

    Message:
    "{user_message}"

    Personal Information:
    - Name: {name} {surname if surname else ''}
    - Email: {email}
    - Phone Number: {phone_number}
    '''
    
    # Add optional fields if they are provided
    if property_owner:
        message += f'- Property Owner: {"Yes" if property_owner else "No"}\n'
    if property_type:
        message += f'- Property Type: {property_type}\n'
    if property_county:
        message += f'- Property County: {property_county}\n'

    message += '''
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
