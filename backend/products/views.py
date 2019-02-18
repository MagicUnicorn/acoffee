from django.shortcuts import render
from rest_framework import routers, serializers, viewsets
from .models import Product, Category
from .serialaizers import ProductSerializer, CategorySerializer

# Serializers define the API representation.


# ViewSets define the view behavior.
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.filter(is_deleted=False)
    serializer_class = ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.filter(is_deleted=False)
    serializer_class = CategorySerializer
