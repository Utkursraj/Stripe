import { useState } from "react"
import { ShoppingCart, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#0b0b0b]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Brand */}
          <Link
            to="/"
            className="text-xl font-semibold tracking-wide text-white"
          >
            VIOLET<span className="text-[#8b5cf6]">.</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 text-sm">
            <Link
              to="/"
              className="text-white/70 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-white/70 hover:text-white transition"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-white/70 hover:text-white transition"
            >
              About
            </Link>

            <button className="relative">
              <ShoppingCart className="w-5 h-5 text-white/80 hover:text-white transition" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0b0b0b] border-t border-white/10">
          <div className="flex flex-col px-6 py-6 gap-5 text-sm">
            <Link
              to="/"
              className="text-white/80"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-white/80"
              onClick={() => setOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-white/80"
              onClick={() => setOpen(false)}
            >
              About
            </Link>

            <button className="flex items-center gap-2 text-white/80">
              <ShoppingCart className="w-4 h-4" />
              Cart
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
