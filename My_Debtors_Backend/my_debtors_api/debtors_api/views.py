from rest_framework.decorators import api_view
from rest_framework.response import Response
from my_debtors_api.models import Debtor
from .serializers import DebtorSerializer

@api_view(['GET'])
def getRoutes(reques):
    routes = [
        'GET /api',
        'GET /api/debtors',
        'GET /api/debtors/:id'
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