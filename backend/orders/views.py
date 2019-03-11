from rest_framework import viewsets, decorators
from rest_framework.decorators import list_route
from rest_framework.response import Response

# from rest_framework.decorators import list_route

from .models import Order, OrderProduct
from .serialaizers import OrderSerializer, OrderProductSerializer


# Serializers define the API representation.


# ViewSets define the view behavior.
class OrderViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = OrderProduct.objects.all()
    serializer_class = OrderProductSerializer





