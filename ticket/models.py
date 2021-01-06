from django.db import models
from event.models import Event

# Create your models here.


class Type(models.Model):
    ticketType = models.CharField(max_length=50)

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
    ticketType = models.ForeignKey(Type, related_name='type', on_delete=models.CASCADE)
    startDate = models.DateTimeField()
    endDate = models.DateTimeField()

    def __str__(self):
        return self.ticketTitle


class Ticket(models.Model):
    ticket = models.ForeignKey(TicketDetail, related_name='ticket_detail', on_delete=models.CASCADE)
    event = models.ForeignKey(Event, related_name='event', on_delete=models.CASCADE)

