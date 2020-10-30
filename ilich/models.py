from django.db import models 

class User(models.Model):
    username = models.CharField(max_length=32, unique=True)
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=64)
    create_time = models.DateTimeField(auto_now_add=True)
    is_verified = models.BooleanField(default=0)
    last_ip = models.CharField(max_length=15)
    description = models.TextField(null=True)

    def __str__(self):
        return str(self.username)

class Category(models.Model):
    title = models.CharField(max_length=32, unique=True)
    create_time = models.DateTimeField(auto_now_add=True)
    description = models.TextField(max_length=1000)
    
    def __str__(self):
        return str(self.title)

class Thread(models.Model):
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    thread_id = models.ForeignKey('self', on_delete=models.CASCADE, null=True)
    
    title = models.CharField(max_length=256, null=True)
    create_time = models.DateTimeField(auto_now_add=True)
    description = models.TextField(max_length=1000, null=True)
    is_shown = models.BooleanField(default=1)
    is_user_id_null = models.BooleanField(default=1)
    is_head = models.BooleanField(default=0)

    def __str__(self):
        return str(self.title)

### old model:

class Forum(models.Model):
    name  = models.CharField(max_length=64, default="anon")
    email = models.CharField(max_length=200, null=True)
    topic = models.CharField(max_length=200, null=True)
    descr = models.CharField(max_length=1000, null=True)
    datec = models.DateTimeField(auto_now_add=True, null=True)
    embed = models.CharField(max_length=1000, null=True)
    
    def __str__(self):
        return str(self.topic)

class Discussion(models.Model):
    forum = models.ForeignKey(Forum,blank=True,on_delete=models.CASCADE)
    discuss = models.CharField(max_length=1000)

    def __str__(self):
        return str(self.forum)
