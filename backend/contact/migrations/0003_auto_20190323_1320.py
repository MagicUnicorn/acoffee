# Generated by Django 2.1.7 on 2019-03-23 13:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0002_auto_20190227_1826'),
    ]

    operations = [
        migrations.RenameField(
            model_name='contact',
            old_name='phone_life',
            new_name='phone',
        ),
        migrations.RemoveField(
            model_name='contact',
            name='phone_mts',
        ),
        migrations.RemoveField(
            model_name='contact',
            name='phone_town',
        ),
        migrations.RemoveField(
            model_name='contact',
            name='phone_vel',
        ),
    ]
