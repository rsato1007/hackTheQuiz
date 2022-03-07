from django.db import models

class Choice(models.Model):
    choice = models.CharField(max_length=300)
    correct = models.BooleanField(default=False)

class Question(models.Model):
    question = models.CharField(max_length=300)
    choice = models.ForeignKey(Choice, on_delete=models.CASCADE)

class Subject(models.Model):
    name = models.CharField(max_length=50)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)