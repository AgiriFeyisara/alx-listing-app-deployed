import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, image, description, price }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-3">{description}</p>
        <span className="text-blue-600 font-bold">{price}</span>
      </div>
    </div>
  );
};

export default Card;
