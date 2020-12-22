from django.db import models


# Create your models here.


class Event(models.Model):
    eventTitle = models.CharField(max_length=250)
    keyWords = models.CharField(max_length=25)
    shortDescription = models.CharField(max_length=100, blank=True)
    longDescription = models.CharField(max_length=500, blank=True)
    image = models.ImageField(upload_to='event', default='')
    startDate = models.DateTimeField()
    endDate = models.DateTimeField()

    def __str__(self):
        return self.eventTitle
        
