# Generated by Django 3.1.2 on 2020-10-20 09:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250)),
                ('keyWord', models.CharField(max_length=25)),
                ('description', models.CharField(blank=True, max_length=500)),
                ('startData', models.DateTimeField()),
                ('endData', models.DateTimeField()),
            ],
        ),
    ]
