export type Product = {
  id: number;
  name: string;
  slug: {
    current: string;
  };
  images: any;
  size: string;
  fabric: string;
  color: string;
  weight: string;
  price: number;
  description: string;
  features: string;
  showOnHomepage: boolean;
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
