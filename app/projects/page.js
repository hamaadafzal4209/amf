import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    title: "Low Voltage Switchboard",
    image: "https://www.amf-sa.com/frontend/images/gallery/g1.jpg",
  },
  {
    id: 2,
    title: "Motor Control Center",
    image: "https://www.amf-sa.com/frontend/images/gallery/g2.jpg",
  },
  {
    id: 3,
    title: "Power Distribution Panel",
    image: "https://www.amf-sa.com/frontend/images/gallery/g3.jpg",
  },
  {
    id: 4,
    title: "Automatic Transfer Switch",
    image: "https://www.amf-sa.com/frontend/images/gallery/g4.jpg",
  },
  {
    id: 5,
    title: "Capacitor Bank",
    image: "https://www.amf-sa.com/frontend/images/gallery/g5.jpg",
  },
  {
    id: 6,
    title: "Busway System",
    image: "https://www.amf-sa.com/frontend/images/gallery/g6.jpg",
  },
  {
    id: 7,
    title: "Harmonic Filter",
    image: "https://www.amf-sa.com/frontend/images/gallery/g7.jpg",
  },
  {
    id: 8,
    title: "Smart Metering Panel",
    image: "https://www.amf-sa.com/frontend/images/gallery/g8.jpg",
  },
];

export default function ProductShowcase() {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardContent className="p-0">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <h2 className="text-lg font-semibold p-4 text-center">
                {product.title}
              </h2>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
