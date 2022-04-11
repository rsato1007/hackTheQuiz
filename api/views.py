# Documentation for further reference:
# Django Rest Framework Views: https://www.django-rest-framework.org/api-guide/views/

# Import External Modules
from django.shortcuts import render
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView

# Import Internal Modules
from .models import Subject, Question, Choice
from .serializers import RegisterSerializer, LoginSerializer, SubjectSerializer, QuestionSerializer, ChoiceSerializer

# Create your views here.
class LoginViewSet(ModelViewSet, TokenObtainPairView):
    serializer_class = LoginSerializer
    http_method_names = ['post']

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])

        return Response(serializer.validated_data, status=status.HTTP_200_OK)

# This allows us to create a new user and give them tokens when using the website.
class RegistrationViewSet(ModelViewSet):
    serializer_class = RegisterSerializer
    http_method_names = ['post']

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        res = {
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        }

        return Response({
            "user": serializer.data,
            "refresh": res["refresh"],
            "token": res["access"]
        }, status=status.HTTP_201_CREATED)

# Since simple JWTs expire in a very short time frame, we use this to get them new tokens when that happens.
# We'll revist this because I am not certain if it's working or not.
class RefreshViewSet(viewsets.ViewSet):
    http_method_names = ['post']

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])

        return Response(serializer.validated_data, status=status.HTTP_200_OK)

# This handles all HTTP requests for subjects. Right now there is only the ability to get subjects.
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