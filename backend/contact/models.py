from django.db import models

# Create your models here.


class Contact(models.Model):
	town = models.CharField(max_length=128)
	address = models.CharField(max_length=256)
	phone_town = models.CharField(max_length=13)
	phone_mts = models.CharField(max_length=13)
	phone_vel = models.CharField(max_length=13)
	phone_life = models.CharField(max_length=13)

	def __str__(self):
		return self.address
