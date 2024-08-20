from django.urls import path
from . import views

urlpatterns = [
    path('api/newsletter/susbcribe/', views.UserListView.as_view(), name="subscriber-list")
]