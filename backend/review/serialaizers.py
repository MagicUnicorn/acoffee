from rest_framework import serializers
from .models import Review
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username',)

class ReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Review
        exclude = ('is_deleted', )
