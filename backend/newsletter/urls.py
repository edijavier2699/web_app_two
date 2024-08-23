from django.urls import path
from . import views

urlpatterns = [
    path('api/subscribe/', views.UserListView.as_view(), name="subscriber-list"),
    path('contacted-clients/', views.ContactedClientListCreateView.as_view(), name='contacted-client-list-create'),

]
