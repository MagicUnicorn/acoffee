from django.db import models

# Create your models here.


class Contact(models.Model):
	town = models.CharField(max_length=128)
	address = models.CharField(max_length=256)
	phone = models.CharField(max_length=13)

	def __str__(self):
		return self.address
