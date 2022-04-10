# Documentation for further reference:
# Django Rest Framework Views: https://www.django-rest-framework.org/api-guide/views/

# Import External Modules
from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet

# Import Internal Modules
from .models import Subject, Question, Choice
from .serializers import RegisterSerializer, SubjectSerializer, QuestionSerializer, ChoiceSerializer

# Create your views here.
class RegistrationViewSet(ModelViewSet):
    serializer_class = RegisterSerializer
    http_method_names = ['post']

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        return Response({
            "user": serializer.data
        }, status=status.HTTP_201_CREATED)

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