export type CoffeeTypes = 'cappuccino' | 'latte' | 'macchiato' | 'americano';

export interface CoffeeType {
  id: number;
  name: string;
  subTitle: string;
  type: string;
  price: number;
  image: string;
  description: string;
  rating: number;
}
