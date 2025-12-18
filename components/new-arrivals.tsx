import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    brand: "Bin Bakar Electronics",
    name: "Samsung 40N5300 Smart TV",
    image: "/images/products/product-9.png",
    originalPrice: 60000,
    price: 56000,
  },
  {
    id: 2,
    brand: "Bin Bakar Electronics",
    name: "Samsung Automatic Washing Machine",
    image: "/images/products/product-3.png",
    originalPrice: 110000,
    price: 101000,
  },
  {
    id: 3,
    brand: "Bin Bakar Electronics",
    name: "Haier HSU-12HFM AC",
    image: "/images/products/product-11.png",
    originalPrice: 56000,
    price: 70000,
  },
  {
    id: 4,
    brand: "Bin Bakar Electronics",
    name: "Anex Roti Maker",
    image: "/images/products/product-7.png",
    originalPrice: 56000,
    price: 70000,
  },
  {
    id: 5,
    brand: "Bin Bakar Electronics",
    name: "Gree GS-12FITH Air Conditioner",
    image: "/images/products/product-2.png",
    originalPrice: 56000,
    price: 86000,
  },
  {
    id: 6,
    brand: "Bin Bakar Electronics",
    name: "Gree Air Conditioner",
    image: "/images/products/product-6.png",
    originalPrice: 56000,
    price: 171000,
  },
]

export function NewArrivals() {
  return (
    <section className="py-12">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl whitespace-nowrap">
            <span className="text-[#00bcd4]">New</span> Arrivals
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <div key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow border">
              <div className="p-6 space-y-4">
                {/* Brand name */}
                <p className="text-sm text-gray-900">{product.brand}</p>

                {/* Product name */}
                <h3 className="text-lg font-normal text-[#034E53] line-clamp-2 min-h-[3.5rem]">{product.name}</h3>

                {/* Product image */}
                <div className="aspect-square bg-white rounded flex items-center justify-center">
                  <img
                    src={product.image || "/placeholder.svg?height=200&width=200"}
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-sm text-gray-400 line-through">
                    RS {product.originalPrice.toLocaleString()}
                  </span>
                  <span className="text-xl font-normal text-primary">RS {product.price.toLocaleString()}</span>
                </div>

                {/* Add to cart button */}
                <Button className="w-full h-11 rounded-none">
                  Add to cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
