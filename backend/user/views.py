from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
import rest_framework.status as status
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate

from user.models import User
from user.serializers import UserSerializer, UserSerializerAuthentication


class VerifyUserAPIView(APIView):
    permission_classes = [AllowAny]
    serializer_class = UserSerializerAuthentication

    def post(self, request, *arsg, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            payload = serializer.validated_data
        else:
            print(serializer.error_messages)
            # error_message = serializer.error_messages["non_field_errors"][0].string
            # print(error_message)
            return Response({
                "is_error": True,
                "message": "Authentication failed due to bad credentials"
            })

        password = payload.get("password")
        email = payload.get("email")

        print(f"password: {password} || email: {email}")

        user = authenticate(username=email, password=password)
        token, create = Token.objects.get_or_create(user=user)

        if token:
            return Response({
                'token': token.key,
                'user_id': user.pk,
                'email': user.email
            }, status=status.HTTP_201_CREATED)
        else:
            return Response({"message": "Authentication failed due to unknown reasons", "is_error": True}, status=status.HTTP_401_UNAUTHORIZED)
