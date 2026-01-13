export interface CardProps {
  title: string;
  image: string;
  description: string;
  price: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
};
export interface PropertyProps{
  name:string;
  address:{
    state:string;
    city:string;
    country:string;
  };
  rating:number;
  category:string[];
  price:number;
  offers:{
    bed:string;
    shower:string;
    occupants:string;
  };
  image:string;
  discount:string;
}
