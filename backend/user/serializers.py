from rest_framework.serializers import ModelSerializer
from user.models import User


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

    def validate(self, attrs):
        password = attrs.password
        print(f"password in serializer: {password}")
        return super().validate(attrs)
