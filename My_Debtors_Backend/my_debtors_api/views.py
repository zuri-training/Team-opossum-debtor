from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Debtor
from .serializers import DebtorSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        'GET /api',
        'GET /api/debtors',
        'GET /api/debtors/:id',
        'POST /api/create'
    ]
    return Response(routes)

@api_view(['GET'])
def getDebtors(request):
    debtors = Debtor.objects.all()
    serializer = DebtorSerializer(debtors, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getDebtor(request, pk):
    debtor = Debtor.objects.get(id=pk)
    serializer = DebtorSerializer(debtor, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def addDebtor(request):
        serializer = DebtorSerializer(data=request.data)
        if serializer.is_valid():
            serializer = serializer.validated_data
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors)
    



# from django.shortcuts import render
# from rest_framework.views import APIView
# from rest_framework.response import Response

# from .serializers import DebtorSerializer
# from .models import Debtor

# # Create your views here.
# class DebtorView(APIView):
#     def get(self, request, *args, **kwargs):
#         routes = [
#         'GET /api',
#         'GET /api/debtors',
#         'GET /api/debtors/:id',
#         'POST /api/create'
#         ]
#         return Response(routes)
    
#     def get(self, request, *args, **kwargs):
#         debtors = Debtor.objects.all()
#         serializer = DebtorSerializer(debtors, many=True)
#         return Response(serializer.data)
    
#     def post(self, request, *args, **kwargs):
#         serializer = DebtorSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors)  
