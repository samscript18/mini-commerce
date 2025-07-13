export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  features: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
}

// export interface CartItem {
//   product: Product;
//   quantity: number;
// }

export interface CartItem extends Product {
  quantity: number
}