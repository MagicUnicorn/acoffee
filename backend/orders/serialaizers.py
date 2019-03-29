from rest_framework import serializers
from django.db import transaction
from rest_framework.response import Response

from products.serialaizers import ProductSerializer
from .models import Order, OrderProduct
from django.contrib.auth import get_user_model

UserModel = get_user_model()


class ProductsSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    quantity = serializers.IntegerField()

    class Meta:
        fields = ('id', 'quantity',)


class OrderDisplaySerializer(serializers.ModelSerializer):
    user = serializers.CharField()

    class Meta:
        model = Order
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    user = serializers.CharField()

    class Meta:
        model = Order
        fields = '__all__'


class OrderProductSerializer(serializers.ModelSerializer):
    order = OrderSerializer()
    product = ProductsSerializer(many=True)

    def create(self, validated_data):
        user = validated_data['order']['user']
        with transaction.atomic():
            user_obj = UserModel.objects.filter(username=user)[0]
            order = Order.objects.create(user=user_obj)
            OrderProduct.objects.bulk_create(
                OrderProduct(
                    order_id=order.id, product_id=i['id'], quantity=i['quantity']
                ) for i in validated_data['product']
            )
        return validated_data

    class Meta:
        model = OrderProduct
        fields = '__all__'


class OrderProductDisplaySerializer(serializers.ModelSerializer):
    order = OrderDisplaySerializer()
    product = ProductSerializer()

    class Meta:
        model = OrderProduct
        fields = '__all__'
