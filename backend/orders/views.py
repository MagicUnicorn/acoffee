from rest_framework import viewsets
from rest_framework.decorators import list_route, detail_route
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from django.contrib.auth import get_user_model

from products.models import Product

UserModel = get_user_model()

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
        user = request.query_params['user']
        user_obj = UserModel.objects.filter(username=user)
        if not user_obj:
            return Response({}, 200)
        order_id = Order.objects.filter(user_id=user_obj[0].id).order_by('-id')
        if not order_id:
            return Response({}, 200)
        res = []
        order_products = OrderProduct.objects.filter(order_id=order_id[0].id)
        for order_product in order_products:
            product = Product.objects.filter(id=order_product.product_id)[0]
            res_dict = {}
            res_dict["name"] = product.name
            res_dict["description"] = product.description
            res_dict["image"] = product.image.url
            res_dict["price"] = product.price
            res_dict["quantity"] = order_product.quantity
            res.append(res_dict)
        return Response(res, 200)





