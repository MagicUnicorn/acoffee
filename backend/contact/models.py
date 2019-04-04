from django.db import models

# Create your models here.


class Contact(models.Model):
	town = models.CharField(max_length=128)
	address = models.CharField(max_length=256)
	phone = models.CharField(max_length=13)

	def __str__(self):
		return self.address


class Letter(models.Model):
	first_name = models.CharField(max_length=128)
	last_name = models.CharField(max_length=128)
	email = models.EmailField(max_length=128)
	message = models.TextField(max_length=1024)

	def __str__(self):
		return '{}_{}_{}'.format(self.first_name, self.last_name, self.email)