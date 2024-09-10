from django.urls import path
from . import views

urlpatterns = [
    path('api/subscribe/', views.DemoUserListView.as_view(), name="demo-list"),
    path('contacted-clients/', views.ContactedClientListCreateView.as_view(), name='contacted-client-list-create'),

]
