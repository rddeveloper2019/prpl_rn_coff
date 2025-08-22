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
export interface CoffeePayload {
  text: string;
  type: string;
}
export type CoffeeResponse = CoffeeType[];
