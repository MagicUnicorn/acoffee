from rest_framework import viewsets
from rest_framework.decorators import list_route, detail_route
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

# from rest_framework.decorators import list_route

from .models import Order, OrderProduct
from .serialaizers import OrderSerializer, OrderProductSerializer, OrderProductDisplaySerializer


# Serializers define the API representation.


# ViewSets define the view behavior.
class OrderViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderProductViewSet(ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = OrderProduct.objects.all()
    serializer_class = OrderProductSerializer

    @list_route(methods=['get'])
    def get_order(self, request, pk=None):
        user_id = request.query_params['user_id']
        order = Order.objects.filter(user_id=user_id).order_by('-id')[0]
        result = OrderProduct.objects.filter(order_id=order.id)
        serialaizer = OrderProductDisplaySerializer(result, many=True)
        return Response({}, 200)





