# Import Django Prebuilt Modules
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

# Import Internal Modules
from .models import User, Question, Choice, Subject

admin.site.register(User, UserAdmin)

@admin.register(Question, Choice, Subject)
class DefaultAdmin(admin.ModelAdmin):
    pass