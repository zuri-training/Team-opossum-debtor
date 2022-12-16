from django.urls import path
from .views import RegisterView, LoginView, CreateComplaintView, ComplaintListView


urlpatterns = [
    path('register/', RegisterView.as_view(), name = 'Register'),
    path('login/', LoginView.as_view(), name = 'login'),
    path('complaints/create/', CreateComplaintView.as_view(), name = 'create_complaint'),
    path('complaints/list', ComplaintListView.as_view(), name = 'list_complaints'),
]
