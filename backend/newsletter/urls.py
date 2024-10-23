from django.urls import path
from . import views

urlpatterns = [
    path('api/subscribe/', views.DemoUserListView.as_view(), name="demo-list"),
    path('contacted-clients/', views.ContactedClientListCreateView.as_view(), name='contacted-client-list-create'),
    path('send-newsletter/', views.SendNewsletter.as_view(), name="send-newsletter"),
    path('newsletter/', views.show_newsletter, name='mostrar_newsletter'),
]
