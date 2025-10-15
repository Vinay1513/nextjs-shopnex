# ShopNex - Premium Next.js E-Commerce Demo ✨

A stunning, modern e-commerce demo built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Features beautiful gradients, smooth animations, and a premium Apple-inspired UI.

## 🌐 Live Demo

**🚀 [View Live Site on Vercel](https://nextjs-shopnex-8yvi.vercel.app/)**

---

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff69b4)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### Core Functionality
- 🛍️ **Complete E-Commerce Flow**: Browse products, view details, manage cart
- 🎨 **Premium UI/UX**: Apple/Shopify-inspired design with glassmorphism
- ⚡ **Next.js 14 App Router**: Latest Next.js features with TypeScript
- 📦 **State Management**: Zustand for lightweight cart management
- 🖼️ **Real Product Images**: High-quality Unsplash images
- 📱 **Fully Responsive**: Mobile-first design

### Visual Design
- 🌈 **Animated Gradients**: Purple-to-blue, indigo-to-pink backgrounds
- ✨ **Framer Motion Animations**: Smooth page transitions, hover effects, fade-ins
- 💎 **Glassmorphism Effects**: Frosted glass cards and navbar
- 🎭 **Soft Shadows & Rounded Corners**: Modern, premium aesthetic
- 🎨 **Premium Color Palette**: Indigo/purple/pink gradient scheme
- 🔤 **Poppins Font**: Clean, modern typography

### Performance
- 🚀 **Optimized Images**: Next.js Image optimization
- ⚡ **60 FPS Animations**: Smooth, lightweight animations
- 📊 **Static Generation**: Fast page loads
- 🎯 **SEO Optimized**: Proper metadata and semantic HTML

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Images**: [Unsplash](https://unsplash.com/)
- **Font**: [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)

## 📁 Project Structure

```
nextjs-shopnex/
├── app/                      # Next.js 14 App Router
│   ├── layout.tsx           # Root layout with Poppins font
│   ├── page.tsx             # Home page with animated hero
│   ├── products/            # Products listing
│   ├── product/[id]/        # Dynamic product pages
│   ├── about/               # About page
│   ├── cart/                # Shopping cart
│   ├── not-found.tsx        # 404 page
│   └── globals.css          # Global styles with glassmorphism
├── components/              # Animated React components
│   ├── Navbar.tsx           # Glassmorphism navbar
│   ├── Footer.tsx           # Gradient footer
│   ├── ProductCard.tsx      # Animated product cards
│   ├── ProductGrid.tsx      # Product grid layout
│   └── ProductDetail.tsx    # Animated product detail
├── lib/                     # Utilities
│   └── store.ts             # Zustand cart store
├── types/                   # TypeScript definitions
│   └── product.ts           # Product types
├── data/                    # Static data
│   └── products.json        # Products with Unsplash images
└── public/                  # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/nextjs-shopnex.git
   cd nextjs-shopnex
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Available Pages

- **`/`** - Animated home page with gradient hero banner
- **`/products`** - All products with animated grid
- **`/product/[id]`** - Product detail with smooth animations
- **`/about`** - About page with glassmorphism cards
- **`/cart`** - Shopping cart with AnimatePresence

## 🎨 Design Features

### Animations
- **Page Transitions**: Smooth fade-in effects on scroll
- **Product Cards**: Hover scale and fade-in on view
- **Navbar**: Slide down animation on mount
- **Cart Badge**: Scale animation for item count
- **Buttons**: Hover scale and tap feedback

### Color Scheme
```css
Primary Gradient: from-indigo-600 via-purple-600 to-pink-600
Accent: violet-500 → fuchsia-400
Background: slate-50 → blue-50 → indigo-50
Glass Effect: backdrop-blur with rgba transparency
```

### Typography
- **Font Family**: Poppins (300, 400, 500, 600, 700)
- **Headings**: Bold gradient text effect
- **Body**: Clean, readable sizing

## 🔧 Customization

### Adding New Products

Edit `data/products.json` with Unsplash image URLs:

```json
{
  "id": 13,
  "name": "Your Product",
  "price": 99.99,
  "description": "Description",
  "category": "Category",
  "image": "https://images.unsplash.com/photo-xxxxx?w=800&q=80",
  "featured": true,
  "inStock": true,
  "rating": 4.5,
  "reviews": 100
}
```

### Changing Colors

Edit `tailwind.config.js`:

```js
backgroundImage: {
  'gradient-premium': 'linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%)',
}
```

### Adjusting Animations

Edit animation settings in components:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }} // Adjust duration
>
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deploy on Vercel

**Live Demo:** [https://nextjs-shopnex-8yvi.vercel.app/](https://nextjs-shopnex-8yvi.vercel.app/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/nextjs-shopnex)

### Deployment Steps:
1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js
4. Your site will be live in minutes!

**Current deployment:** [nextjs-shopnex-8yvi.vercel.app](https://nextjs-shopnex-8yvi.vercel.app/)

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Performance Tips

- Images are lazy-loaded using Next.js Image
- Animations use GPU acceleration (transform, opacity)
- Framer Motion animations are optimized for 60 FPS
- Glassmorphism effects use backdrop-filter

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Images from [Unsplash](https://unsplash.com/)
- Icons from [Heroicons](https://heroicons.com/)
- State management by [Zustand](https://github.com/pmndrs/zustand)

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Made with ❤️ using Next.js 14 + TypeScript + Tailwind CSS + Framer Motion**

✨ **Experience the future of e-commerce design!** ✨
