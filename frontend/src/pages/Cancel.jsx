import { XCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Cancel() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-6">
      <div className="max-w-md w-full rounded-2xl border border-white/10 bg-[#111] p-10 text-center shadow-xl">

        <XCircle className="mx-auto h-14 w-14 text-white/40" />

        <h1 className="mt-6 text-2xl font-semibold text-white">
          Checkout Cancelled
        </h1>

        <p className="mt-3 text-white/60">
          No worries — your payment was not processed.
          You can continue browsing anytime.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-8 w-full rounded-xl border border-white/20 py-3 font-semibold text-white hover:border-[#8b5cf6] hover:text-[#8b5cf6] transition"
        >
          Back to Store
        </button>
      </div>
    </div>
  )
}
