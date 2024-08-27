from django.core.mail import EmailMessage
from django.conf import settings

def send_welcome_email(email_address):
    subject = 'Welcome to Tokunize!'

    html_message = '''
    <html>
    <body>
    
        <p>Welcome to Tokunize!</p>

        <p>We are thrilled to have you as a part of our community. As a member of Tokunize, you will have access to:</p>

        <ul>
            <li><strong>Exclusive Updates:</strong> Stay informed about our latest features and special offers.</li>
            <li><strong>Insights and Tips:</strong> Learn how to maximize your experience with our services.</li>
            <li><strong>Information on Upcoming Events:</strong> Be the first to know about our events and promotions.</li>
        </ul>

        <p>Our team is dedicated to ensuring you have a seamless experience. Should you have any questions or need support, please do not hesitate to reach out to us at <a href="mailto:support@tokunize.com">support@tokunize.com</a>.</p>

        <p>Thank you for joining us. We look forward to helping you achieve your goals.</p>

        <p>Warm regards,<br>
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
