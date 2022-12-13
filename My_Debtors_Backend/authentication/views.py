from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response 
from rest_framework.generics import (
    ListCreateAPIView, RetrieveUpdateDestroyAPIView, 
    UpdateAPIView, get_object_or_404,
    ListAPIView, CreateAPIView, GenericAPIView
)
from .serializers import (
    UserSerializer, LoginSerializer, 
    CreateComplaintsSerializer, 
    ComplaintsListSerializer,
)
from django.conf import settings
from django.contrib import auth
import jwt 
from .models import Complaint

class RegisterView(GenericAPIView):
    serializer_class = UserSerializer

    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        username = request.data.get('username', None)
        password = request.data.get('password', None)
        user = auth.authenticate(username=username, password=password)

        if user:
            auth_token = jwt.encode({'username': user.username}, settings.JWT_SECRET_KEY)
            serializer = LoginSerializer(user)
            data = {
                'user': serializer.data,
                'token': auth_token
            }

            return Response({'Data': data}, status=status.HTTP_200_OK)
        return Response({'Error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


class CreateComplaintView(CreateAPIView):
    serializer_class = CreateComplaintsSerializer
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        phone_number = serializer.data.get('Phone_number', None)
        compliant_number = serializer.data.get('complaint_number', None)
        message = f'You have successfully lodged a complaint. Your complaint number is {complaint_number}.'


class ComplaintListView(ListAPIView):
    serializer_class = ComplaintsListSerializer
    queryset = Complaint.objects.all()


















        
