from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.


class Order(models.Model):
	user = models.ForeignKey(User, related_name='orders', on_delete='Cascade')
	product = models.ManyToManyField('products.Product', related_name='products')
	datetime_open = models.DateTimeField()
	datetime_close = models.DateTimeField()

