from rest_framework import serializers
from .models import Review
from django.contrib.auth import get_user_model

User = get_user_model()


class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.CharField()

    def create(self, validated_data):
        if validated_data.get('user') and validated_data.get('title') and validated_data.get('body'):
            user = User.objects.filter(username=validated_data['user'])
            if user:
                user = user[0]
            else:
                user = None
            Review.objects.create(
                user=user,
                title=validated_data['title'],
                body=validated_data['body']
            )
            return validated_data
        else:
            return validated_data

    # def list

    class Meta:
        model = Review
        exclude = ('is_deleted', )

