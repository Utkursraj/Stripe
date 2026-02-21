import ProductCard from "../components/ProductCard"

const products = [
  {
    id: 1,
    name: "React T-Shirt",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    price: 20,
  },
  {
    id: 2,
    name: "JavaScript Hoodie",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
    price: 45,
  },
  {
    id: 3,
    name: "Full Stack Mug",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600",
    price: 15,
  },
]

export default function Product() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-semibold tracking-tight">
          All Products
        </h1>
        <p className="mt-2 text-white/60">
          Designed for builders. Crafted for everyday wear.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  )
}
