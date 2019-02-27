from rest_framework import viewsets
from .models import Review
from .serialaizers import ReviewSerializer

# Serializers define the API representation.


# ViewSets define the view behavior.
class ReviewViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Review.objects.filter(is_deleted=False)
    serializer_class = ReviewSerializer


