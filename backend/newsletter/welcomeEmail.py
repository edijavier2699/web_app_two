from django.core.mail import send_mail
from django.conf import settings

def send_welcome_email(email_address):
    subject = 'Welcome to Tokunize!'
    
    message = f'''
    Hi there,

    Thank you for signing up for Tokunize! We're excited to have you join our community.

    Here's what you can expect from us:
    - **Exclusive updates** on the latest features and offers
    - **Insights and tips** to help you get the most out of our services
    - **Information on upcoming events and promotions**

    We're here to help you make the most of your experience. If you have any questions or need assistance, feel free to reach out to our support team at support@tokunize.com.

    Thanks again for joining us!

    Best regards,
    The Tokunize Team
    '''

    from_email = settings.EMAIL_HOST_USER

    try:
        send_mail(subject, message, from_email, [email_address])
        return True
    except Exception as e:
        print(f'Error sending email: {e}')
        return False
