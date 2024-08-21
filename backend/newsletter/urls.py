from django.urls import path
from . import views

urlpatterns = [
    path('api/subscribe/', views.UserListView.as_view(), name="subscriber-list")
]
