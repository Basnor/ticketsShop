from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.index),
    path('event/', views.index),
    path('about/', views.index),
    path('tickets/', views.index),
    path('basket/', views.index)
]
