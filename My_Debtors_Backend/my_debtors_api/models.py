from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class School(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    email = models.CharField(max_length=20)
    proprietor = models.CharField(max_length=100)
    total_students = models.IntegerField()
    
    def __str__(self):
        return self.name
    
class Student(models.Model):
    school_id = models.ForeignKey(School, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    student_class = models.CharField(max_length=20)
    joinedOn = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.first_name

class Debtor(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    school_id = models.ForeignKey(School, on_delete=models.CASCADE)
    student_id = models.ForeignKey(Student, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    phone_number = models.IntegerField()
    resident_address = models.CharField(max_length=100)
    amount_owed = models.IntegerField()
    
    def __str__(self):
        return str(self.user_id)
    
class Complaint(models.Model):
    VOTE = (
        ('Likes', 'likes'),
        ('Unlike', 'unlike'),
    )
    
    school_id = models.ForeignKey(School, on_delete=models.SET_NULL, null=True)
    debtor_id = models.ForeignKey(Debtor, on_delete=models.SET_NULL, null=True)
    body = models.TextField()
    resolved = models.BooleanField()
    created = models.DateTimeField(auto_now=True)
    reactions = models.CharField(max_length=10, null=True, choices=VOTE)
    
    def __str__(self):
        return str(self.body[0:25])+"..."
    

