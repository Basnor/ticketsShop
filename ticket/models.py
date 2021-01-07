from django.db import models
from event.models import Event

# Create your models here.


class Type(models.Model):
    ticketType = models.CharField(max_length=50)
    info = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.ticketType


class TicketDetail(models.Model):
    ticketTitle = models.CharField(max_length=250)
    image = models.ImageField(upload_to='ticket', default='')
    keyWords = models.CharField(max_length=25)
    description = models.CharField(max_length=1000, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    numLeft = models.PositiveIntegerField(default=0)
    numMax = models.PositiveIntegerField(default=0)
    startDate = models.DateTimeField()
    endDate = models.DateTimeField()
    ticketType = models.ForeignKey(Type, related_name='tickets', on_delete=models.CASCADE)

    def __str__(self):
        return self.ticketTitle


class Organizer(models.Model):
    eventId = models.ForeignKey(TicketDetail, related_name='orgs', on_delete=models.CASCADE)
    fName = models.CharField(max_length=20)
    sName = models.CharField(max_length=20)
    photo = models.ImageField(upload_to='org', default='')
    about = models.CharField(max_length=500, blank=True)


class SocialLinks(models.Model):
    organizerId = models.ForeignKey(Organizer, related_name='links', on_delete=models.CASCADE)
    instagram = models.CharField(max_length=100, blank=True)
    twitter = models.CharField(max_length=100, blank=True)
    facebook = models.CharField(max_length=100, blank=True)
    linkedein = models.CharField(max_length=100, blank=True)


class Ticket(models.Model):
    ticket = models.ForeignKey(TicketDetail, related_name='ticket_detail', on_delete=models.CASCADE)
    event = models.ForeignKey(Event, related_name='event', on_delete=models.CASCADE)

