from django.urls import path

from .views import (
    OrderItemListView,
    OrderItemCreateView,
    OrderItemDeleteView
)

urlpatterns = [
    path('', OrderItemListView.as_view()),
    path('create/', OrderItemCreateView.as_view()),
    path('delete/<pk:int>/', OrderItemDeleteView.as_view())
]
