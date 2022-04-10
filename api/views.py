from django.shortcuts import render
from .models import Subject, Question, Choice
from .serializers import SubjectSerializer, QuestionSerializer, ChoiceSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class Subjects(APIView):
    def get(self, request, format=None):
        subjects = Subject.objects.all()
        serializer = SubjectSerializer(subjects, many=True)
        return Response(serializer.data)

class Questions(APIView):
    def get(self, request, pk, format=None):
        questions = Question.objects.filter(subject=pk)
        serializer = QuestionSerializer(questions, many=True)
        return Response(serializer.data)