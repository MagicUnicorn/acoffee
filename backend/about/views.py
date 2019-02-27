from rest_framework import viewsets
from .models import AboutUs
from .serialaizers import AboutSerializer

# Serializers define the API representation.


# ViewSets define the view behavior.
class AboutViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AboutUs.objects.all()
    serializer_class = AboutSerializer
