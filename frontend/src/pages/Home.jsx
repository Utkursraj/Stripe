import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"

const featuredProducts = [
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
    image: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?w=600",
    price: 15,
  },
]

export default function Home() {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Wear the future of code
          </h1>

          <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto">
            Minimal. Powerful. Developer essentials designed for those
            who build what matters.
          </p>

          <Link
            to="/products"
            className="inline-block mt-10 rounded-xl bg-[#8b5cf6] px-10 py-4 text-black font-semibold tracking-wide hover:bg-[#7c3aed] transition"
          >
            Shop Collection
          </Link>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            Featured Products
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
