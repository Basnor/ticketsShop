from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'index.html')

def indexDetail(request, pk):
    return render(request, 'index.html')