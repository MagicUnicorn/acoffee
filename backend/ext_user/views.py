from rest_framework import status
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from django.contrib.auth import get_user_model

from .serializers import UserSerializer


class CreateUserView(ModelViewSet):
    
    # model = get_user_model()
    queryset = get_user_model().objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer