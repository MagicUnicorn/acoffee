# Generated by Django 2.1.7 on 2019-02-27 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='body',
            field=models.TextField(max_length=10000),
        ),
    ]