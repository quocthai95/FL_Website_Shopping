export interface ProductModel {
    id: number;
    name: string;
    price: number;
    img: string[];
    description?: string;
    sale: boolean;
    new: boolean;
    gift: boolean;
    oldPrice: number;
}
