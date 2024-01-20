type Image = {
  asset: {
    url: string;
  };
};

export type Product = {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  images: any;
  price: number;
  description: string;
  category: {
    name: string;
  };
  quantity: number;
};

export type Category = {
  name: string;
  slug: {
    current: string;
  };
};
