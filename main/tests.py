from django.test import TestCase
from .models import Product

class ProductModelTest(TestCase):
    def setUp(self):
        # Membuat instance Product untuk pengujian
        self.product = Product.objects.create(
            name='Running Shoes',
            price=5000000,
            description='High quality running shoes, made from UK',
            thumbnail='https://example.com/image.jpg',
            category='Shoes',
            is_featured=True
        )

    def test_product_creation(self):
        # Test apakah product berhasil dibuat dan atributnya benar
        self.assertEqual(self.product.name, 'Running Shoes')
        self.assertEqual(self.product.price, 5000000)
        self.assertEqual(self.product.description, 'High quality running shoes, made from UK')
        self.assertEqual(self.product.thumbnail, 'https://example.com/image.jpg')
        self.assertEqual(self.product.category, 'Shoes')
        self.assertTrue(self.product.is_featured)

    def test_product_str_method(self):
        # Test method __str__ mengembalikan nama product
        self.assertEqual(str(self.product), 'Running Shoes')
