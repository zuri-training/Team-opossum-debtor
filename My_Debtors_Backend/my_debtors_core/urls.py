from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path('', include('my_debtors_api.urls')),
    path('auth/user/', include('authentication.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('my_debtors_api.urls'))
]
