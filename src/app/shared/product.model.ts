export interface ProductModel {
    _id: number;
    productId: string;
    productName: string;
    category: string;
    price: number;
    discount: number;
    image: Array<any>;
    description: string[];
    sale: boolean;
    new: boolean;
    hot: boolean;
    amount: number;
}
