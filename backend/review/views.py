
from .models import Review
from .serialaizers import ReviewSerializer
from rest_framework.viewsets import ModelViewSet

# Serializers define the API representation.


# ViewSets define the view behavior.
class ReviewViewSet(ModelViewSet):
    queryset = Review.objects.filter(is_deleted=False)
    serializer_class = ReviewSerializer


