interface PropertyDetailProps {
  property: {
    title: string;
    description: string;
    price: number;
    location: string;
    image: string;
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-80 object-cover rounded-lg"
      />

      <h1 className="text-2xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-500">{property.location}</p>

      <p className="mt-4 text-gray-700">{property.description}</p>

      <p className="mt-6 text-xl font-semibold text-blue-600">
        ₦{property.price.toLocaleString()}
      </p>
    </div>
  );
}
