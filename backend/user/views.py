from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
import rest_framework.status as status
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate

from user.models import User
from user.serializers import UserSerializer


class VerifyUserAPIView(APIView):
    permission_classes = [AllowAny]
    serializer_class = UserSerializer

    def post(self, request, *arsg, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            payload = serializer.validated_data

        password = payload.get("password")
        email = payload.get("email")

        user = authenticate(request=request, username=email, password=password)
        print(user)

        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email
        }, status=status.HTTP_201_CREATED)
