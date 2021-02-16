export interface Product {
  id: string;
  name: string;
  price: number;
  desc: string;
  favorite: boolean;
  thumb: {
    id: string;
    url: string;
  };
}

export interface ProductData {
  products: Product[];
}
