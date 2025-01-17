from django.db import models
from django.utils import timezone
# Модели для меню


class Category(models.Model):
	# Модель дял продуктов
	name = models.CharField(max_length=128)
	timestamp_create = models.DateTimeField(default=timezone.now)
	timestamp_update = models.DateTimeField(default=timezone.now)
	description = models.CharField(max_length=512)
	is_deleted = models.BooleanField(default=False)

	def __str__(self):
		return self.name


class Product(models.Model):
	# Модель для категорий
	name = models.CharField(max_length=128)
	category = models.ForeignKey('Category', related_name='products', on_delete='Cascade')
	price = models.FloatField(default=0.0)
	price_sale = models.FloatField(default=0.0)
	image = models.ImageField()
	timestamp_create = models.DateTimeField(default=timezone.now)
	timestamp_update = models.DateTimeField(default=timezone.now)
	description = models.CharField(max_length=512)
	is_deleted = models.BooleanField(default=False)
	is_vegan = models.BooleanField(default=False)
	is_sale = models.BooleanField(default=False)

	def __str__(self):
		return self.name
