from django.contrib import admin
from .models import Question, Choice, Subject

@admin.register(Question, Choice, Subject)
class DefaultAdmin(admin.ModelAdmin):
    pass