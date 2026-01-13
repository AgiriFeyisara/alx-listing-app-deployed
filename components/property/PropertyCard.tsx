interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    price: number;
    location: string;
    image: string;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border rounded-lg shadow-sm overflow-hidden">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-gray-500">{property.location}</p>
        <p className="text-blue-600 font-bold mt-2">
          ₦{property.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
