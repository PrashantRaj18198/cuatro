import graphene
import graphql_jwt
import authentication.schema
import music_library.schema

class Query(authentication.schema.Query, music_library.schema.Query, graphene.ObjectType):
    pass


class Mutation(authentication.schema.Mutation, graphene.ObjectType):

    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
