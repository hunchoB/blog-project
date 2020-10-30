from django.shortcuts import render,redirect
from .models import * 
from .forms import * 
# Create your views here.
 
def home(request):
    forums=Forum.objects.all()
    count=forums.count()
    discussions=[]
    for i in forums:
        discussions.append(i.discussion_set.all())
 
    context={'forums':forums,
              'count':count,
              'discussions':discussions}
    return render(request,'home.html',context)
 
def addInBoard(request):
    form = CreateInBoard()
    if request.method == 'POST':
        form = CreateInBoard(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
    context ={'form':form}
    return render(request,'addInBoard.html',context)
 
def addInThread(request):
    form = CreateInThread()
    if request.method == 'POST':
        form = CreateInThread(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
    context ={'form':form}
    return render(request,'addInThread.html',context)
