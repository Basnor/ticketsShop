from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.index),
    path('event/', views.index),
    path('about/', views.index),
    path('tickets/', views.index),
    path('tickets/<int:pk>/', views.indexDetail),
    path('basket/', views.index),
    path('login/', views.index),
    path('register/', views.index)
]
