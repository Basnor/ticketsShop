from django.db import models


# Create your models here.


class Event(models.Model):
    title = models.CharField(max_length=250)
    keyWord = models.CharField(max_length=25)
    description = models.CharField(max_length=500, blank=True)
    startData = models.DateTimeField()
    endData = models.DateTimeField()

    def __str__(self):
        return self.title
