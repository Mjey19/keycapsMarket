export interface CardInterface {
  id: number;
  title: string;
  price: number;
}

export interface DrawerCardInterface extends CardInterface {
  count: number;
}
