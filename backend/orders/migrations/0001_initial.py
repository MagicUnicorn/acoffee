# Generated by Django 2.1.7 on 2019-02-26 19:41

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('products', '0002_auto_20190226_1941'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('datetime_open', models.DateTimeField()),
                ('datetime_close', models.DateTimeField()),
                ('product', models.ManyToManyField(related_name='products', to='products.Product')),
                ('user', models.ForeignKey(on_delete='Cascade', related_name='orders', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]