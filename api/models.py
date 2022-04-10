# We use this file to store all models needed for the quiz site.
# Additionally, I have used AbstractUser in the event I wanted to add
# extra fields to the user model.
# Documentation on AbstractUser can be found here: https://docs.djangoproject.com/en/4.0/topics/auth/customizing/#substituting-a-custom-user-model

# External Modules
from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    # For now, I will use pass until I have need for further need with this model.
    pass
    
class Subject(models.Model):
    name = models.CharField(max_length=50)

class Question(models.Model):
    text = models.CharField(max_length=300)
    answer_desc = models.CharField(max_length=500)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='questions')

class Choice(models.Model):
    text = models.CharField(max_length=300)
    is_correct = models.BooleanField(default=False)
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name="choices")