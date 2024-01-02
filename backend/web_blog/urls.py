from django.urls import path
from web_blog.views import WebBlog

urlpatterns= [
    path('', WebBlog.as_view()),
]