from django.db import models


# Create your models here.


class Event(models.Model):
    eventTitle = models.CharField(max_length=250)
    keyWords = models.CharField(max_length=25)
    shortDescription = models.CharField(max_length=500, blank=True)
    longDescription = models.CharField(max_length=1000, blank=True)
    image = models.ImageField(upload_to='event', default='')
    startDate = models.DateTimeField()
    endDate = models.DateTimeField()

    def __str__(self):
        return self.eventTitle
        
class Organizer(models.Model):
    eventId = models.ForeignKey(Event, related_name='orgs', on_delete=models.CASCADE)
    fName = models.CharField(max_length=20)
    sName = models.CharField(max_length=20)
    photo = models.ImageField(upload_to='org', default='')
    about = models.CharField(max_length=500, blank=True)

    