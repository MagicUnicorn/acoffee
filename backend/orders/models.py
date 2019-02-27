from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.


class Order(models.Model):
	user = models.ForeignKey(User, related_name='order_user', on_delete='Cascade')
	datetime_open = models.DateTimeField()
	datetime_close = models.DateTimeField()

	def __str__(self):
		return self.id.__str__()


class OrderProduct(models.Model):
	order = models.ForeignKey(Order, related_name='orders', on_delete=models.CASCADE)
	product = models.ForeignKey('products.Product', related_name='order_products', on_delete=models.CASCADE)
	quantity = models.IntegerField(default=1)

	def __str__(self):
		return self.id.__str__()
