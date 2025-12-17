# Panto Furniture E-commerce

A modern, responsive furniture e-commerce website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core Features
- **Modern E-commerce Platform**: Complete furniture shopping experience
- **Responsive Design**: Fully responsive across all device sizes
- **Shopping Cart**: Context-based cart management with real-time updates
- **Smooth Animations**: Framer Motion powered transitions
- **Performance Optimized**: Built with Next.js for optimal performance

### Navigation System
- **Sticky Navigation**: Auto-hiding navbar with scroll effects
- **Dropdown Menus**: Furniture categories with animated dropdowns
- **Mobile-First**: Mobile-optimized navigation with hamburger menu
- **Smooth Scrolling**: Anchor links with smooth scrolling behavior
- **Active States**: Visual feedback for active navigation items

### UI Components
- **Custom Navbar**: With cart counter and furniture dropdown
- **Product Display**: Featured products with interactive elements
- **Footer**: Multi-column layout with social links
- **Shopping Cart**: Real-time cart updates with badge notifications

## 🛠️ Tech Stack

**Frontend Framework:**
- Next.js 16.0.10 (React 19.2.1)
- TypeScript for type safety

**Styling:**
- Tailwind CSS with PostCSS
- Custom utility classes

**UI Components & Icons:**
- Lucide React Icons
- React Icons
- Framer Motion for animations

**Carousel & Sliders:**
- Swiper.js for product carousels

**State Management:**
- React Context API for cart management

## 📁 Project Structure
panto-furniture/
├── app/
│ ├── context/
│ │ └── CartContext.tsx # Cart state management
│ ├── components/
│ │ ├── Navbar.tsx # Main navigation
│ │ ├── Footer.tsx # Site footer
│ │ └── ... # Other components
│ ├── cart/
│ │ └── page.tsx # Cart page
│ └── layout.tsx # Root layout
├── data/
│ └── content.ts # Static content and links
├── lib/
│ └── utils.ts # Utility functions
├── public/ # Static assets
└── package.json

## 🎨 Design System

### Colors
- **Primary**: `#E58411` (Orange) - Used for hover states and accents
- **Secondary**: Brand-specific color for logo
- **Background**: White with subtle grays
- **Text**: Black with gray variants for less important text

### Typography
- **Headings**: DM Sans font
- **Body**: Gilroy font family
- **Font Weights**: Regular, Medium, and Bold variants

### Animations
- Smooth transitions for hover states
- Mobile menu slide-in animations
- Dropdown fade-in effects
- Scroll-triggered navbar effects

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd panto-furniture