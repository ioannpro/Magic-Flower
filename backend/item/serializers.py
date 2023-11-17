from rest_framework import serializers
from .models import *


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'

class FlowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flower
        fields = '__all__'

class Recipe_ComponentSerializer(serializers.ModelSerializer):
    flower = FlowerSerializer()

    class Meta:
        model = Recipe_Component
        fields = '__all__'

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

class OneItemSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Item
        fields = ['name', 'price', 'category', 'recipe']

class Item_ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item_Image
        fields = '__all__'
