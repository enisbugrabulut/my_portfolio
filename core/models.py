from django.db import models

# Create your models here.

class Tag(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Project(models.Model):
    headline = models.CharField(max_length=200)
    sub_headline = models.CharField(max_length=200, null=True, blank=True)
    github_link = models.URLField(max_length=500, null=True, blank=True)
    thumbnail = models.ImageField(null=True, blank=True, upload_to="projects/thumbnails/", default="projects/placeholder.png")
    created = models.DateTimeField(auto_now_add=True)
    active = models.BooleanField(default=False)
    featured = models.BooleanField(default=False)
    tags = models.ManyToManyField(Tag, blank=True)
    

    def __str__(self):
        return self.headline