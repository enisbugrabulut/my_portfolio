from django.shortcuts import render
from .models import Project

def custom_404_view(request, exception):
    return render(request, '404.html', status=404)

def home(request):
    return render(request, 'core/home.html')

def about(request):
    return render(request, 'core/about.html')

def contact(request):
    return render(request, 'core/contact.html')

def projects(request):
    projects = Project.objects.all()

    context = {'projects': projects}
    return render(request, 'core/projects.html', context)