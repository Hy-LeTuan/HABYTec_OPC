from rest_framework import serializers
from user.models import User
from django.contrib.auth.hashers import check_password


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

    def validate(self, data):
        password = data.password
        print(f"password in serializer: {password}")
        return super().validate(data)


class UserSerializerAuthentication(serializers.ModelSerializer):
    password = serializers.CharField(validators=[])
    email = serializers.CharField()

    class Meta:
        model = User
        fields = ["email", "password"]

    def validate(self, data):
        password = data.get("password")
        email = data.get("email")

        try:
            user = User.objects.get(email=email)
        except Exception as e:
            raise serializers.ValidationError(detail="No email found")

        valid_password = check_password(
            password=password, encoded=user.password)

        if valid_password:
            return data
        else:
            raise serializers.ValidationError(detail="Password does not match")
