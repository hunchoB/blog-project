from django.db import models 

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
