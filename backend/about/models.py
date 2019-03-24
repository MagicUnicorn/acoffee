from django.db import models

# Create your models here.


class AboutUs(models.Model):
	title = models.CharField(max_length=126)
	about = models.TextField(max_length=10000)
	image = models.ImageField()

	def __str__(self):
		return self.title

