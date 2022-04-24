from rest_framework import serializers
from .models import Article
from django.contrib.auth import get_user_model

User = get_user_model()

class ArticleSerializer(serializers.ModelSerializer)