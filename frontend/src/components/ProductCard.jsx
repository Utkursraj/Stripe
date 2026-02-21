import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);

const ProductCard = ({ product }) => {
  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ product }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url;

    } catch (error) {
      console.error("Checkout error:", error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="group bg-[#111] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
      
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white tracking-wide">
          {product.name}
        </h3>

        <p className="mt-2 text-xl font-bold text-[#c7a96b]">
          ${product.price}
        </p>

        <button
          onClick={handleCheckout}
          className="mt-6 w-full rounded-xl bg-white text-black py-3 font-semibold tracking-wide hover:bg-[#c7a96b] hover:text-black transition-all"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;