# Veston - Curated Commerce

A modern, design-led e-commerce experience built with Next.js 14 and Tailwind CSS, inspired by the Veston brand palette and typography.

## Features

- 🛍️ Product catalog with hover zoom effects
- 🛒 Shopping cart functionality
- 💳 Checkout with payment form
- 📱 Fully responsive design
- 🎨 Custom Veston palette (deep navy, warm cream, burnt copper, teal)

## Pages

- **Home** - Hero section and featured products
- **Products** - Full product catalog with descriptions
- **About Us** - Company information
- **Contact** - Contact form and information
- **Checkout** - Shopping cart and payment processing

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
veston-ng/
├── app/              # Next.js app directory
│   ├── about/       # About Us page
│   ├── checkout/    # Checkout page
│   ├── contact/     # Contact page
│   ├── products/    # Products page
│   └── page.tsx     # Home page
├── components/      # React components
│   ├── Navbar.tsx   # Navigation bar
│   └── ProductCard.tsx
├── context/         # React context
│   └── CartContext.tsx
├── public/          # Static assets
│   └── productImg/  # Product images
└── types/           # TypeScript types
```

## Color System

- **Background**: `#F8F3EA` (warm cream)
- **Primary**: `#0F1C2E` (deep navy)
- **Secondary**: `#F2E5D4` (muted sand)
- **Accent**: `#C8641B` (burnt copper)
- **Brand Teal**: `#1A8A89`

## Technologies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
