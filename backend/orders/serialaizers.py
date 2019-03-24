from rest_framework import serializers
from django.db import transaction

from products.serialaizers import ProductSerializer
from .models import Order, OrderProduct


class ProductsSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    quantity = serializers.IntegerField()

    class Meta:
        fields = ('id', 'quantity',)


class OrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = '__all__'


class OrderProductSerializer(serializers.ModelSerializer):
    order = OrderSerializer()
    product = ProductsSerializer(many=True)

    def create(self, validated_data):
        user = validated_data['order']['user']
        with transaction.atomic():
            order = Order.objects.create(user=user)
            for i in validated_data['product']:
                print(i)
            order_products = OrderProduct.objects.bulk_create(
                OrderProduct(
                    order_id=order.id, product_id=i['id'], quantity=i['quantity']
                ) for i in validated_data['product']
            )
        return order_products

    class Meta:
        model = OrderProduct
        fields = '__all__'


class OrderProductDisplaySerializer(serializers.ModelSerializer):
    order = OrderSerializer()
    product = ProductSerializer()

    class Meta:
        model = OrderProduct
        fields = '__all__'
