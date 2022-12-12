from django.db import models
from django.conf import settings

class Complaint(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
    full_names = models.CharField(max_length=300, null=True, blank=True)
    phone_number = models.CharField(max_length=200, null=True, blank= False)
    complaint = models.TextField(max_length=500, null=True, blank=True)
    complaint_umber = models.AutoField(blank=False, null=False, primary_key=True)
    location = models.CharField(max_length=300, null=True, blank=True)
    is_resolved = models.BooleanField(default=False)
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    date_resolved = models.DateTimeField(auto_now=True, null=True)
    assigned_to = models.CharField(max_length=300, null=True, blank=True)
    status = models.CharField(max_length=255, blank=True, default='pending')

    def __str__(self):
        return self.full_names
