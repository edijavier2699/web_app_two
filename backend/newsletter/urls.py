from django.urls import path
from . import views

urlpatterns = [
    path('api/subscribe/', views.DemoUserListView.as_view(), name="demo-list"),
    path('contacted-clients/', views.ContactedClientListCreateView.as_view(), name='contacted-client-list-create'),
    path('send-newsletter/', views.SendNewsletter.as_view(), name="send-newsletter"),
    path("api/invitation-request/", views.InvitationRequestListView.as_view(), name="invitation-request-create")
]
