from .models import Music
from graphene_django import DjangoObjectType
import graphene
# from django.contrib.auth import 

class MusicType(DjangoObjectType):
    class Meta:
        model = Music


class Query(graphene.ObjectType):
    # music_list = graphene.List()
    music = graphene.List(MusicType)

    def resolve_music(self, info, **kwargs):
        return Music.objects.all()
    
    def resolve_some(self, info, **kwargs):
        return 1
# schema = graphene.Schema(query=Query)