from rest_framework import serializers
from .models import Subject, Choice, Question

# Documentation can be found here: https://www.django-rest-framework.org/tutorial/1-serialization/#creating-a-serializer-class
class ChoiceSerializer(serializers.ModelSerializer):
    # question = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Choice
        fields = ['text', 'is_correct']

class QuestionSerializer(serializers.ModelSerializer):
    # subject = serializers.PrimaryKeyRelatedField(read_only=True)
    choices = ChoiceSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ['text', 'answer_desc', 'choices']

class SubjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subject
        fields = ['name', 'id']