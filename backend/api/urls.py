from django.urls import path
import user.views as user_views

urlpatterns = [
    path("users/", user_views.VerifyUserAPIView.as_view()),
]
