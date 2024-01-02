from rest_framework import generics, status
from web_blog.models import WebBlogModel
from web_blog.serializers import WebBlogSerializer
from rest_framework.response import Response

class WebBlog(generics.GenericAPIView):
    queryset = WebBlogModel.objects.all()
    serializer_class = WebBlogSerializer

    def get(self, request):
        serialize_article = self.serializer_class(self.get_queryset(), many=True)

        return Response(serialize_article.data)
    
    def post(self, request):
        serialise_webblog = self.serializer_class(data=request.data)

        if serialise_webblog.is_valid():
            serialise_webblog.save()

            return Response(serialise_webblog.data, status=status.HTTP_201_CREATED)

        return Response(serialise_webblog.errors, status=status.HTTP_400_BAD_REQUEST)
