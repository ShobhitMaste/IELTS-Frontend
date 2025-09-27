# IELTS Frontend - Landing Page

A modern, responsive landing page for an IELTS preparation platform built with React and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShobhitMaste/IELTS-Frontend.git
   cd ielts-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design Choices

### Technology Stack
- **React 19** - Latest React version for optimal performance
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework for rapid styling
- **ESLint** - Code quality and consistency

### Design Philosophy

**Modern & Clean Interface**
- Minimalist design with focus on content readability
- Consistent spacing and typography using the Geist font family
- Subtle shadows and borders for visual hierarchy

**Responsive Design**
- Mobile-first approach with responsive grid layouts
- Adaptive navigation and content sections
- Optimized for all screen sizes (mobile, tablet, desktop)

**User Experience**
- Fixed header with backdrop blur for modern glass-morphism effect
- Smooth scrolling with proper scroll margins for navigation
- Interactive hover states on buttons and links
- Clear visual hierarchy with consistent button styles

### Component Architecture
- **Modular Components**: Each section (Hero, Features, Review, Footer) is a separate component
- **Reusable Styling**: Custom CSS classes for consistent button styles and typography
- **Custom Hooks**: `useWindowSize` for responsive behavior
- **Clean Structure**: Organized components in dedicated folders

### Color Scheme & Typography
- **Primary Colors**: Black/white with subtle grays for text hierarchy
- **Typography**: Geist font family for modern, clean appearance
- **Interactive Elements**: Hover states with subtle color transitions
- **Accessibility**: High contrast ratios and readable font sizes

## 📁 Project Structure

```
src/
├── components/
│   ├── Features.jsx      # Program features section
│   ├── Footer.jsx        # Footer component
│   ├── Hero.jsx          # Hero section with CTA
│   ├── Navbar.jsx        # Navigation header
│   └── Review.jsx        # Testimonials section
├── hooks/
│   └── useWindowSize.jsx # Custom hook for responsive behavior
├── App.jsx              # Main application component
├── index.css            # Global styles and custom classes
└── main.jsx            # Application entry point
```

## 🛠️ Development Notes

- The application uses Tailwind CSS 4 with custom CSS classes for specific styling needs
- All components are functional components using React hooks
- The design emphasizes educational content with clear call-to-action buttons
- Responsive breakpoints are handled through Tailwind's responsive utilities
- Custom CSS classes provide consistent styling for buttons, typography, and layout elements