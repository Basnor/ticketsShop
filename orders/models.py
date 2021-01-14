from django.db import models
from ticket.models import Ticket
from accounts.models import UserAccount


class Order(models.Model):
    account = models.ForeignKey(UserAccount, related_name='account', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.id)

    def get_total_cost(self):
        total_cost = sum(item.get_cost() for item in self.items.all())
        return total_cost


class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    ticket = models.ForeignKey(Ticket, on_delete=models.CASCADE)
    num = models.PositiveIntegerField(default=1)

    def get_cost(self):
        print(self.ticket.get_cost())
        return self.num * self.ticket.get_cost()
