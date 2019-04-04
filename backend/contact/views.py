
from rest_framework import viewsets, views
from rest_framework.response import Response

from .models import Contact, Letter
from .serialaizers import ContactSerializer, LetterSerializer

# Serializers define the API representation.


# ViewSets define the view behavior.
class ContactViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class LetterViewSet(viewsets.ModelViewSet):
    queryset = Letter.objects.all()
    serializer_class = LetterSerializer

    # def get(self, request):
    #     data = Letter.objects.all()
    #     results = LetterSerializer(data, many=True).data
    #     return Response(results)
#