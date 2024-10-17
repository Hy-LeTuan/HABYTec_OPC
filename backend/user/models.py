from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    email = models.EmailField(("email address"), unique=True, blank=False)
    phone = models.CharField(
        verbose_name="Phone number", max_length=20, blank=False)
    secondary_email = models.EmailField(
        verbose_name="Secondary email", blank=True, null=True)
    password_reset_otp = models.CharField(max_length=6, null=True, blank=True)
    password_reset_otp_time = models.CharField(
        null=True, blank=True, max_length=30)

    # automatically set USERNAME_FIELD to username
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]
