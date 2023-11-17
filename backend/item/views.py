from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Max, Min
from .models import *
from .serializers import *


class AllAPIView(APIView):

    def get(self, request):

        items = Item.objects.all()
        item_max = items.aggregate(Max('price'))['price__max']
        item_min = items.aggregate(Min('price'))['price__min']
        
        categorys = Category.objects.all()
        flowers = Flower.objects.all()
        recipe_components = Recipe_Component.objects.all()
        recipes = Recipe.objects.all()
        recipes_json = []

        for i in recipes:
            recipes_json.append({
                 'id': RecipeSerializer(i).data['id'],
                 'components': Recipe_ComponentSerializer(recipe_components.filter(recipe = i.id), many=True).data,
                })
        
        return Response({
            'filters': {
                    'price': {
                        'min': item_min,
                        'max': item_max
                        },
                    'categorys': CategorySerializer(categorys, many=True).data,
                    'flowers': FlowerSerializer(flowers, many=True).data,
                    'recipe': recipes_json
                },
            'products': ItemSerializer(items, many=True).data
        })
    
class PopularAPIView(APIView):

    def get(self, request):

        return Response({})
    
class ItemAPIView(APIView):

    def get(self, request, slug):

        item = Item.objects.get(slug=slug)
        item_ser_data = OneItemSerializer(item).data

        return Response({
                'name': item_ser_data['name'],
                'price': item_ser_data['price'],
                'category': item_ser_data['category'],
                'recipe':  Recipe_ComponentSerializer(Recipe_Component.objects.all().filter(recipe = item_ser_data['recipe']), many=True).data,
                
            })