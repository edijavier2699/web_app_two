from django.core.mail import send_mail
from django.conf import settings

def contactFormEmail(email,name,user_message,phone_number):
    subject = f'{name} Contact Us!'
    
    message = f'''
    This is the message of {name} : 
    {user_message}

    Personal information:
    Name: {name}
    Email: {email}
    Phone number: {phone_number}
    '''

    from_email = settings.EMAIL_HOST_USER

    try:
        send_mail(subject, message, from_email, [email])
        return True
    except Exception as e:
        print(f'Error sending email: {e}')
        return False
