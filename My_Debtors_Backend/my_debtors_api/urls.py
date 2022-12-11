from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes),
    path('debtors/', views.getDebtors),
    path('debtors/<str:pk>/', views.getDebtor),
    path('create/', views.addDebtor)
    
]
