from rest_framework import viewsets
from rest_framework.decorators import list_route
from rest_framework.response import Response

from .models import Product, Category
from .serialaizers import ProductSerializer, CategorySerializer


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.filter(is_deleted=False)
    serializer_class = ProductSerializer

    @list_route(methods=['get'])
    def get_vegan(self, request, pk=None):
        queryset = self.queryset.filter(is_vegan=True)
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data)

    @list_route(methods=['get'])
    def get_sale(self, request, pk=None):
        self.queryset.filter(is_vegan=True)
        queryset = self.queryset.filter(is_sale=True)
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data)

    @list_route(methods=['get'])
    def get_sale_vegan(self, request, pk=None):
        queryset = self.queryset.filter(is_vegan=True, is_sale=True)
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data)


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.filter(is_deleted=False)
    serializer_class = CategorySerializer

