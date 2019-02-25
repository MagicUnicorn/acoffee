from rest_framework import viewsets
from .models import Order
from .serialaizers import OrderSerializer

# Serializers define the API representation.


# ViewSets define the view behavior.
class OrderViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
