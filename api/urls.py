# Import External Modules
from django.urls import path
from rest_framework.routers import SimpleRouter

# Import Internal Modules
from . import views

# Router Instance
router = SimpleRouter()

# Authentication Routes
router.register(r'auth/register', views.RegistrationViewSet, basename='auth-register')

urlpatterns = [
    path('subject/', views.Subjects.as_view(), name="list_subjects"),
    path('subject/<int:pk>/questions', views.Questions.as_view(), name="list_questions")
]

urlpatterns += router.urls