from .models import User, CustomerProfile
from graphene_django import DjangoObjectType
import graphene
from django.contrib.auth import get_user_model

class UserType(DjangoObjectType):
    class Meta:
        model = User

class Customertype(DjangoObjectType):
    class Meta:
        model = CustomerProfile


class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)
    customer = graphene.List(Customertype)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)
        
    def mutate(self, info, username, password, email):
        user = User.objects.create_user(
            username=username,
            email=email,
        )
        user.set_password(password)
        user.save()

        customer = CustomerProfile.objects.create(
            Customer=user,
        )

        customer.save()

        return CreateUser(user=user, customer=customer)

class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
    # send_friend_request = CreateFriendRequest.Field()


class Query(graphene.ObjectType):
    # image = graphene.Field(AvatarImageType, id=graphene.Int())
    # images = graphene.List(AvatarImageType)
    # me = graphene.Field(Customertype)
    users = graphene.List(UserType)
    # customer = graphene.List(Customertype)
    # pendingRequests = graphene.List(FriendRequestType)

    # def resolve_pendingRequests(self, info):
    #     print(info.context.user)
    #     return FriendRequest.objects.filter(to_user=CustomerProfile.objects.get(Customer=info.context.user))

    def resolve_users(self, info, **kwargs):
        return User.objects.all()

    def resolve_customer(self, info, **kwargs):
        return CustomerProfile.objects.all()

    # def resolve_image(self, info, **kwargs):
        # idd = kwargs.get('id')
        # return AvatarImage.objects.get(pk=idd)

    def resolve_me(self, info):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('Authentication Failure!')
        return CustomerProfile.objects.get(Customer=user)