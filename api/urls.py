from django.urls import path
from . import views

urlpatterns = [
    path('subject/', views.Subjects.as_view(), name="list_subjects"),
    path('subject/<int:pk>/questions', views.Questions.as_view(), name="list_questions"),
    # path('question/<int:pk>/', views.Questions.as_view(), name="list_questions"),
]