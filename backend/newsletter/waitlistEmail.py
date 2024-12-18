from django.core.mail import EmailMessage
from django.conf import settings

def send_waitlist_email(email_address):
    subject = 'You are on the Waitlist - Thank You for Your Interest!'

    html_message = f'''
    <html>
    <body>
    
        <p>Thank you for your interest in Tokunize!</p>


        <p>Feel free to explore our platform and learn more about how Tokunize can help you unlock new opportunities in real estate investing:</p>
        <ul>
            <li>Discover the benefits of using Tokunize.</li>
            <li>Learn how to start investing in real estate assets.</li>
            <li>Read our FAQs to get more information about our services.</li>
        </ul>

        <p>If you have any questions or need further assistance, please do not hesitate to reach out to our team at <a href="mailto:mohammed.omar@tokunize.com">mohammed.omar@tokunize.com</a>.</p>

        <p>Thank you for your patience and understanding. We look forward to having you join us soon!</p>

        <p>Best regards,<br>
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
