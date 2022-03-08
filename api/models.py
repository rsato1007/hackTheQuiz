from django.db import models

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