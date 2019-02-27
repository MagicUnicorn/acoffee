from django.db import models
from django.utils import timezone


class News(models.Model):
	title = models.CharField(max_length=126)
	body = models.TextField(max_length=10000)
	signature = models.CharField(max_length=64)
	image = models.ImageField()
	timestamp_create = models.DateTimeField(default=timezone.now)
	timestamp_update = models.DateTimeField(default=timezone.now)

	def __str__(self):
		return self.title
