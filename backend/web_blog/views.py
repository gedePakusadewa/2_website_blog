from rest_framework import generics, status
from web_blog.models import WebBlogModel
from web_blog.serializers import WebBlogSerializer
from rest_framework.response import Response
from datetime import datetime

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

class WebBlogDetail(generics.GenericAPIView):
    queryset = WebBlogModel.objects.all()
    serializer_class = WebBlogSerializer

    def get_webblog(self, pk):
        try:
            return WebBlogModel.objects.get(pk=pk)
        except:
            return None
        
    def get(self, request, pk):
        webblog = self.get_webblog(pk)

        if not webblog:
            return Response(
                {
                    "status": "fail",
                    "message": f"Webblog with Id: {pk} not found"
                },
                status=status.HTTP_404_NOT_FOUND
            )

        serialize_article = self.serializer_class(webblog)

        return Response(serialize_article.data)
    
    def patch(self, request, pk):
        webblog = self.get_webblog(pk)

        if not webblog:
            return Response(
                {
                    "status": "fail",
                    "message": f"Webblog with Id: {pk} not found"
                },
                status=status.HTTP_404_NOT_FOUND
            )
    
        serialise_webblog = self.serializer_class(webblog, data=request.data, partial=True)

        if serialise_webblog.is_valid():
            serialise_webblog.validated_data['updatedAt'] = datetime.now()
            serialise_webblog.save()

            return Response(serialise_webblog.data, status=status.HTTP_200_OK)
        
        return Response(serialise_webblog.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        webblog = self.get_webblog(pk)

        if not webblog:
            return Response(
                {
                    "status": "fail",
                    "message": f"Webblog with Id: {pk} not found"
                },
                status=status.HTTP_404_NOT_FOUND
            )
    
        webblog.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)
