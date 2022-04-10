# Below is documentation on things used in this file:
# Serializers: https://www.django-rest-framework.org/api-guide/serializers/
# ModelSerializers: https://www.django-rest-framework.org/api-guide/serializers/#modelserializer

from rest_framework import serializers
from .models import Subject, Choice, Question, User

# The original article I am using starts by creating a user serializer than crafts
# a serializer for registration and one for logging in. I am gonna
# try and just do a register for now.
# todo: eventually I will look to see if the user has an existing email.
# For now, let's jsut get registering a user going.
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=64, min_length=8, write_only=True, required=True)
    email = serializers.EmailField(required=True, write_only=True, max_length=128)

    class Meta:
        model = User
        # https://www.django-rest-framework.org/api-guide/serializers/#specifying-which-fields-to-include
        fields = ['id', 'username', 'email', 'password']
    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

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