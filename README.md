# Stripe Payment Integration (MERN + Vite + Render)

This is a full-stack Stripe payment integration project deployed on Render.

## 🚀 Live Demo

Frontend:
https://stripe-1-pusa.onrender.com

Backend API:
https://stripe-of17.onrender.com

---

## 🛠 Tech Stack

Frontend:
- React (Vite)
- TailwindCSS
- Stripe.js

Backend:
- Node.js
- Express
- Stripe API
- CORS
- dotenv

Deployment:
- Render (Frontend + Backend)

---

## 📦 Environment Variables

### Backend (.env)

```
STRIPE_SECRET_KEY=your_secret_key
CLIENT_URL=https://your-frontend-url.onrender.com
```

### Frontend (.env)

```
VITE_STRIPE_PUBLISHABLE_KEY=your_publishable_key
VITE_API_URL=https://your-backend-url.onrender.com
```

---

## ⚙️ How It Works

1. User clicks "Buy Now"
2. Frontend calls backend `/create-checkout-session`
3. Backend creates Stripe Checkout session
4. User is redirected to Stripe payment page
5. On success → redirected to `/success`
6. On cancel → redirected to `/cancel`

---

## 📌 Important Notes

- Do NOT expose Stripe Secret Key in frontend.
- Backend handles session creation securely.
- CORS is configured to allow frontend domain.

---


