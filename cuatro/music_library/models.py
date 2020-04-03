from django.db import models
from django.conf import settings
# Create your models here.
class Music(models.Model):
    music_link = models.URLField(max_length=100)
    artist_name = models.CharField(max_length=100, default='Unknown')
    music_name = models.CharField(max_length=100, default='Unknowm ')
