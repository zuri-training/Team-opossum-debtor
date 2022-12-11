from rest_framework.serializers import ModelSerializer
from .models import Debtor

class DebtorSerializer(ModelSerializer):
    class Meta:
        model = Debtor
        fields = '__all__'
        