from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
import rest_framework.status as status

from user.models import User
from user.serializers import UserSerializer


class VerifyUserAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *arsg, **kwargs):
        serializer = UserSerializer
        payload = request.data

        password = payload.get("password")

        print(password)

        return Response(status=status.HTTP_202_ACCEPTED)
