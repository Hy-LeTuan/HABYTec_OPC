from rest_framework.serializers import ModelSerializer
from user.models import User


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

    def validate(self, data):
        password = data.password
        print(f"password in serializer: {password}")
        return super().validate(data)


class UserSerializerAuthentication(ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "password"]

    def validate(self, data):
        username = data.get("username")
        password = data.get("password")

        return super().validate(data)
