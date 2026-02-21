import { CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"

export default function Success() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-6">
      <div className="max-w-md w-full rounded-2xl border border-white/10 bg-[#111] p-10 text-center shadow-xl">

        <CheckCircle className="mx-auto h-14 w-14 text-[#8b5cf6]" />

        <h1 className="mt-6 text-2xl font-semibold text-white">
          Order Confirmed
        </h1>

        <p className="mt-3 text-white/60">
          Your payment was successful.  
          This piece is now officially yours.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block w-full rounded-xl bg-[#8b5cf6] py-3 font-semibold text-black hover:bg-[#7c3aed] transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}
