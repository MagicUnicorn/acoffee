from rest_framework import serializers
from .models import Product, Category


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        exclude = ('is_deleted', )


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        exclude = ('is_deleted', )
