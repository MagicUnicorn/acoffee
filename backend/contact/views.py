
from rest_framework import routers, serializers, viewsets
from .models import Contact
from .serialaizers import ContactSerializer

# Serializers define the API representation.


# ViewSets define the view behavior.
class ContactViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
