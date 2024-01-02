from rest_framework import serializers
from web_blog.models import WebBlogModel

class WebBlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = WebBlogModel
        fields = '__all__'