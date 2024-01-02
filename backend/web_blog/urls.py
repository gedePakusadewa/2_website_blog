from django.urls import path
from web_blog.views import WebBlog, WebBlogDetail

urlpatterns= [
    path('', WebBlog.as_view()),
    path('<str:pk>', WebBlogDetail.as_view()),

]