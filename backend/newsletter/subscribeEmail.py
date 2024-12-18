from django.core.mail import EmailMessage
from django.conf import settings

def send_subscribe_email(email_address):
    subject = 'Welcome to Tokunize! You’ve Successfully Subscribed!'

    html_message = f'''
    <html>
    <body>
    
        <p>Hi there!</p>

        <p>Thank you for subscribing to Tokunize! We're excited to have you on board.</p>

        <p>You're now officially part of the Tokunize community! While you're waiting for the next steps, we invite you to explore our platform and discover how Tokunize can help you unlock new opportunities in real estate investing:</p>
        <ul>
            <li>Explore the many benefits of using Tokunize.</li>
            <li>Learn how to start investing in real estate assets.</li>
            <li>Browse through our FAQs to get more information about our services.</li>
        </ul>

        <p>If you have any questions or just want to reach out, feel free to email us anytime at <a href="mailto:mohammed.omar@tokunize.com">mohammed.omar@tokunize.com</a>. We're here to help!</p>

        <p>Thanks again for subscribing – we’re looking forward to having you with us!</p>

        <p>Cheers, <br>
        The Tokunize Team</p>
    </body>
    </html>
    '''

    from_email = settings.EMAIL_HOST_USER

    try:
        email = EmailMessage(subject, html_message, from_email, [email_address])
        email.content_subtype = "html"  # Important for HTML emails
        email.send()
        return True
    except Exception as e:
        print(f'Error sending email: {e}')
        return False
