from django.db import models


class Category(models.Model):
    up_category = models.IntegerField(blank=True)
    name = models.CharField(max_length=255)

class Recipe(models.Model):
    name = models.CharField(max_length=255)

class Flower(models.Model):
    name = models.CharField(max_length=255)  

class Recipe_Component(models.Model):
    recipe = models.ForeignKey(to='Recipe', on_delete=models.SET_NULL, null=True)
    flower = models.ForeignKey(to='Flower', on_delete=models.SET_NULL, null=True)
    quantity = models.IntegerField()
    price_one = models.FloatField()

class Item(models.Model):
    slug = models.SlugField(max_length=255, unique=True, db_index=True)
    name = models.CharField(max_length=255, db_index=True)
    image = models.ImageField(upload_to='')
    price = models.FloatField()
    like = models.IntegerField()
    order = models.IntegerField()
    category = models.ForeignKey(to='Category', on_delete=models.SET_NULL, null=True)
    recipe = models.ForeignKey(to='Recipe', on_delete=models.SET_NULL, null=True)
    view = models.BooleanField(default=True)

class Item_Image(models.Model):
    item = models.ForeignKey(to='Item', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='')