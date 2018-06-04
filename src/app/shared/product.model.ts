export interface ProductModel {
    _id: number;
    name: string;
    price: number;
    img: string[];
    description?: string;
    sale: boolean;
    new: boolean;
    hot: boolean;
    oldPrice: number;
    quantity: number;
}
