export interface CardInterface {
  id: string;
  title: string;
  price: number;
  category: string;
}
export interface ProductPageInterface extends CardInterface {
  category: string;
  connectionType: string;
  setSize: string;
  lighting: string;
}
export interface DrawerCardInterface extends CardInterface {
  count: number;
}
