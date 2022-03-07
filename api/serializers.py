from rest_framework import serializers
from .models import Subject, Choice, Question

# Documentation can be found here: https://www.django-rest-framework.org/tutorial/1-serialization/#creating-a-serializer-class
class SubjectSerializer(serializers.Serializer):
    name = serializers.CharField(read_only=True)

class QuestionSerializer(serializers.Serializer):
    question = serializer.CharField(read_only=True)

class ChoiceSerializer(serializers.Serializer):
    choice = serializer.CharField(read_only=True)
    correct = serializer.BooleanField