from django.forms import ModelForm
from .models import *
 
class CreateInBoard(ModelForm):
    class Meta:
        model= Forum
        fields = "__all__"
 
class CreateInThread(ModelForm):
    class Meta:
        model= Discussion
        fields = "__all__"
