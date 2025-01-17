"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import url, include

from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
from products.views import ProductViewSet, CategoryViewSet
from about.views import AboutViewSet
from contact.views import ContactViewSet, LetterViewSet
from news.views import NewsViewSet
from orders.views import OrderProductViewSet
from review.views import ReviewViewSet
from ext_user.views import CreateUserView


router = routers.DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'category', CategoryViewSet)
router.register(r'about', AboutViewSet)
router.register(r'contact', ContactViewSet)
router.register(r'news', NewsViewSet)
router.register(r'order_product', OrderProductViewSet)
router.register(r'review', ReviewViewSet)
router.register(r'create_user', CreateUserView)
router.register(r'letter', LetterViewSet, 'letter')


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url('admin/', admin.site.urls),
    url('api-token-auth/', obtain_auth_token, name='api_token_auth'),
    # url('create-user/', CreateUserView, name='create-user')
]
urlpatterns += router.urls

# urlpatterns = [
#
# ]
