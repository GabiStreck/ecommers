export type Product = {
  id: string;
  title: string;
  rating: number;
  price: number;
  image: Image;
  color: Color[];
  genre: string;
  discount: number;
  tradeMark: TradeMark;
  category: Category;
  stocks: Stock[];
};

export type Stock = {
  id: string;
  sizeChart: number;
  stock: number;
};

export type Image = {
  url: string;
};

export type TradeMark = {
  id: string;
  name: string;
};

export type Category = {
  id: string;
  name: string;
};

export type Color = {
  hex: string;
  css: string;
};
