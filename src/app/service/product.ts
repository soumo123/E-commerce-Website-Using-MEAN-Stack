export class Product {
    _id!: String;
    productname!: String;
    description!: String;
    brand!: String;
    price!: Number;
    image!: String;
    rating!: String;
    category!: String;
}

export interface CART_MODEL{
    id: string,
    quantity: number
  }