from django.core.mail import EmailMessage
from django.conf import settings

def send_demo_booking_email(email_address):
    subject = 'Your Demo is Confirmed - Thank You for Booking!'

    html_message = f'''
    <html>
    <body>
    
        <p>Thank you for booking a demo with Tokunize!</p>

        <p>We are excited to show you how our platform can help you unlock new opportunities in real estate investing. You will soon receive a personalized link to join the demo presentation.</p>

        <p>In this demo, we will cover:</p>
        <ul>
            <li>How Tokunize works and the benefits of using our platform.</li>
            <li>Step-by-step guidance on investing in real estate assets.</li>
            <li>Answers to any questions you may have about our services.</li>
        </ul>

        <p>If you have any questions before the demo or need assistance, please don’t hesitate to reach out to our team at <a href="mailto:mohammed.omar@tokunize.com">mohammed.omar@tokunize.com</a>.</p>

        <p>Thank you again for your interest in Tokunize. We look forward to helping you explore new real estate opportunities!</p>

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
