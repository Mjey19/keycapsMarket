export interface CardInterface {
  id: string;
  title: string;
  price: number;
  category: string;
}

export interface DrawerCardInterface extends CardInterface {
  count: number;
}
