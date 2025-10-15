export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  featured: boolean;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
}

