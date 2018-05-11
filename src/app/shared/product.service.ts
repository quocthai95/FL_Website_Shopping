export class ProductService {
    products = [
        {
            'id': 1,
            'img': ['assets/images/product1.jpg', 'assets/images/product1_2.jpg'],
            'name': 'Fur coat with very but very very long name',
            'sale': false,
            'new': false,
            'gift': false,
            'price': 143.00,
            'oldPrice': null
        },
        {
            'id': 2,
            'img': ['assets/images/product2.jpg', 'assets/images/product2_2.jpg'],
            'name': 'White Blouse Armani',
            'sale': true,
            'new': true,
            'gift': true,
            'price': 143.00,
            'oldPrice': 280
        },
        {
            'id': 3,
            'img': ['assets/images/product3.jpg', 'assets/images/product3_2.jpg'],
            'name': 'Black Blouse Versace',
            'sale': false,
            'new': false,
            'gift': false,
            'price': 143.00,
            'oldPrice': null
        },
        {
            'id': 4,
            'img': ['assets/images/product3.jpg', 'assets/images/product3_2.jpg'],
            'name': 'Black Blouse Versace',
            'sale': false,
            'new': false,
            'gift': false,
            'price': 143.00,
            'oldPrice': null
        },
        {
            'id': 5,
            'img': ['assets/images/product2.jpg', 'assets/images/product2_2.jpg'],
            'name': 'White Blouse Armani',
            'sale': false,
            'new': true,
            'gift': false,
            'price': 143.00,
            'oldPrice': null
        },
        {
            'id': 6,
            'img': ['assets/images/product1.jpg', 'assets/images/product1_2.jpg'],
            'name': 'Fur coat with very but very very long name',
            'sale': false,
            'new': false,
            'gift': true,
            'price': 143.00,
            'oldPrice': 200
        },
        {
            'id': 7,
            'img': ['assets/images/product3.jpg', 'assets/images/product3_2.jpg'],
            'name': 'Black Blouse Versace',
            'sale': false,
            'new': false,
            'gift': false,
            'price': 143.00,
            'oldPrice': null
        },
        {
            'id': 8,
            'img': ['assets/images/product3.jpg', 'assets/images/product3_2.jpg'],
            'name': 'Black Blouse Versace',
            'sale': false,
            'new': false,
            'gift': false,
            'price': 143.00,
            'oldPrice': null
        }
    ];

    getProductId(id: number) {
        return this.products[id - 1];
    }
}

