from rest_framework import viewsets
from .models import News
from .serialaizers import NewsSerializer

# Serializers define the API representation.


# ViewSets define the view behavior.
class NewsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
