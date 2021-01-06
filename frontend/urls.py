from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.index),
    path('event/', views.index),
    path('about/', views.index),
    path('tickets/', views.index),
    # path('tickets/<pk>/', views.index),
    path('basket/', views.index),
    path('login/', views.index),
    path('register/', views.index)
]
