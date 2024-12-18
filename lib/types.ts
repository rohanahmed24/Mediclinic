export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  category: string;
  tags: string[];
  onSale?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

