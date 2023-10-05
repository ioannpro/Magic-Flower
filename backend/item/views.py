from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

class AllAPIView(APIView):

    def get(self, request):

        return Response({
            'filter': {
                'price': {
                    'min': 100,
                    'max': 300
                    },
                'flowers': [],
            },
            'products': [
                {
                    'slug': 'linear-flower',
                    'name':'Linear Flower',
                    'price': 100,
                    'image': '',
                    'like': 0,
                    'order': 0,
                    'flowers': []
                },
                {
                    'slug': 'linear-flower-3',
                    'name':'Linear Flower 3',
                    'price': 100,
                    'image': '',
                    'like': 3,
                    'order': 6,
                    'flowers': []
                }
                ]
            })

