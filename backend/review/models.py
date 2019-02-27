from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone

User = get_user_model()


class Review(models.Model):
	# Модель для отзывов
	title = models.CharField(max_length=126)
	body = models.TextField(max_length=10000)
	user = models.ForeignKey(User, related_name='review_user', on_delete='Cascade')
	timestamp_create = models.DateTimeField(default=timezone.now)
	is_deleted = models.BooleanField(default=False)

	def __str__(self):
		return self.title

