# 🛋️ Panto - Modern Furniture Landing Page

A modern, minimalistic furniture e-commerce landing page built with Next.js 14, TypeScript, Tailwind CSS, and Swiper.

![Panto Landing Page](public/images/banner.png)

## 🎯 Features

- ✅ **Modern Design** - Minimalistic and clean UI/UX
- ✅ **Fully Responsive** - Mobile, tablet, and desktop optimized
- ✅ **Hero Section** - Full-screen hero with search and interactive tooltips
- ✅ **Product Showcase** - Grid display with add to cart functionality
- ✅ **Testimonials Carousel** - Swiper.js powered reviews slider
- ✅ **TypeScript** - Type-safe development
- ✅ **Tailwind CSS v4** - Modern utility-first styling
- ✅ **Custom Fonts** - Gilroy font family (Regular, Medium, Bold)
- ✅ **Smooth Animations** - Framer Motion & CSS transitions
- ✅ **SEO Optimized** - Meta tags and semantic HTML

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** Custom components with Lucide Icons
- **Carousel:** [Swiper.js](https://swiperjs.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **State Management:** React Context API
- **Package Manager:** npm / yarn / pnpm

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm / yarn / pnpm

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/nour-derwich/panto-furniture.git
cd panto-furniture
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Install required packages**
```bash
npm install swiper framer-motion lucide-react clsx tailwind-merge
```



4. **Add images**
Place project images in `public/images/`:
```
public/
└── images/
    ├── banner.png
    ├── chair-1.jpg to chair-4.jpg
    ├── reviewer1.png to reviewer3.png
    └── testimonial1.png to testimonial3.png
```

5. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
panto-furniture/
├── public/
│   ├── prodects/
│   │   ├── chair-1.png
│   │   ├── chair-2.png
│   │   └── chair-3.png
        └── ..........
│   └── images/
│       ├── banner.png
│       ├── chair-1.jpg
│       └── testimonial1.png
        └── reviewer1.png
        └── ...........
├── src/
│   .
├── app
│   ├── components
│   │   ├── Rating.tsx
│   │   ├── sections
│   │   │   ├── ChooseUs.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Materials.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Products.tsx
│   │   │   └── Testimonials.tsx
│   │   └── ui
│   │       ├── ArrowButtonImage.tsx
│   │       ├── ArrowButton.tsx
│   │       ├── Button.tsx
│   │       ├── ProductCard.tsx
│   │       ├── TestimonialCard.tsx
│   │       └── TooltipButton.tsx
│   ├── context
│   │   └── CartContext.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── data
│   ├── content.ts
│   ├── material.ts
│   ├── products.ts
│   └── reviews.ts
└── lib
    └── utils.ts

├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

## 🎨 Configuration

### Tailwind CSS

The project uses **Tailwind CSS v4** with custom configuration:

```typescript
// tailwind.config.ts
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E58411',
        secondary: '#1E1E1E',
        accent: '#F7F7F7',
      },
      fontFamily: {
        'gilroy-regular': ['Gilroy-Regular', 'sans-serif'],
        'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
      },
    },
  },
}
```

### Custom Fonts

```css
/* globals.css */
@import "tailwindcss";

@font-face {
  font-family: 'Gilroy-Regular';
  src: url('/fonts/Gilroy-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
```

## 🧩 Key Components

### Hero Section
- Full-screen background image
- Search functionality
- Interactive product tooltips
- Responsive design

### Products Grid
- ProductCard components
- Add to cart functionality
- Hover animations
- Color variants

### Testimonials Carousel
- Swiper.js integration
- Custom navigation buttons
- Auto-play with pause on hover
- Responsive breakpoints (1/2/3 slides)
- Fixed card dimensions 


## 🎯 Custom Classes

```css
.text-nav { font-family: 'Gilroy-Medium'; }
.text-hero { font-family: 'Gilroy-Bold'; }
.text-body { font-family: 'Gilroy-Regular'; }
.btn-text { font-family: 'Gilroy-Regular'; }
.section-container { 
  max-width: 1536px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
}
```

## 📱 Responsive Breakpoints

```javascript
breakpoints: {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px' // Extra large
}
```

## 🛠️ Build & Deploy

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm start
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repo to [Vercel](https://vercel.com) for automatic deployments.

## 📊 Performance

- ✅ Lighthouse Score: 95+
- ✅ First Contentful Paint: < 1.5s
- ✅ Time to Interactive: < 3s
- ✅ Cumulative Layout Shift: < 0.1

## 🐛 Known Issues

- None currently reported

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@nour-derwich](https://github.com/nour-derwich)
- LinkedIn: [nour derouich](https://linkedin.com/in/nour-derouich)

## 🙏 Acknowledgments

- Design inspiration from [Figma Panto---Furniture-Landing-Page-Design--Community](https://www.figma.com/Panto---Furniture-Landing-Page-Design--Community)
- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)

## 📞 Support

For support, email nourderouich59@gmail.com or open an issue in the repository.

---

**⭐ If you like this project, please give it a star on GitHub!**