# SpaceX Landing Page - Professional UI/UX Practice 🚀

A modern, dark-themed SpaceX-inspired landing page built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features smooth animations, parallax effects, and responsive design.

## ✨ Features

- **Full-Screen Hero** with video background & parallax scrolling
- **Vehicle Showcase** with 4 spacecraft cards & hover animations
- **Live Countdown Timer** for featured mission
- **Animated Statistics** with number counters (0→250+)
- **Interactive Navigation** with mobile hamburger menu
- **Email Signup Form** with success states
- **Smooth Scroll Animations** triggered on viewport entry
- **Fully Responsive** design (320px to 1920px+)
- **Dark Minimalist Theme** inspired by SpaceX
- **Spline 3D Ready** for interactive 3D models

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D Graphics:** Spline (optional)
- **Fonts:** Inter & Space Grotesk

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 📁 Project Structure

```
app/
├── components/
│   ├── sections/         # Page sections (Hero, Navigation, etc.)
│   ├── ui/              # Reusable UI components
│   └── animations/      # Framer Motion variants
├── lib/
│   ├── constants.ts     # Data (vehicles, missions, links)
│   ├── types.ts         # TypeScript interfaces
│   └── utils.ts         # Utility functions
├── layout.tsx           # Root layout with fonts & metadata
├── page.tsx             # Main landing page
└── globals.css          # Global styles & CSS variables

public/
├── images/             # Image assets (add your own)
└── videos/             # Video backgrounds (add your own)
```

## 🎨 Sections

1. **Navigation** - Sticky header with scroll behavior
2. **Hero** - Full-screen with CTA buttons
3. **Vehicle Cards** - Falcon 9, Falcon Heavy, Starship, Dragon
4. **Featured Launch** - Mission details with countdown
5. **Technology** - Innovation highlights with animated stats
6. **CTA** - Email signup form
7. **Footer** - Links and social media

## 📸 Adding Images

Place images in `/public/images/`:
- `rockets/falcon9.jpg`
- `rockets/falcon-heavy.jpg`
- `rockets/starship.jpg`
- `rockets/dragon.jpg`
- `starlink.jpg`
- `mars.jpg`
- `hero-poster.jpg`

**Image Sources:**
- [SpaceX Flickr](https://www.flickr.com/photos/spacex/) (free to use)
- [NASA Image Library](https://images.nasa.gov/)
- [Pexels](https://www.pexels.com/search/space/)

## 🎭 Adding 3D Models (Optional)

To add Spline 3D rocket to Hero:
1. Create scene at [Spline](https://spline.design/)
2. Export and get scene URL
3. Uncomment Spline code in `app/components/sections/Hero.tsx` (lines 19-24)
4. Replace URL with your scene ID

## ⚙️ Customization

### Colors
Edit CSS variables in `app/globals.css`:
```css
--accent-cyan: #00d9ff;
--accent-blue: #005288;
--bg-primary: #000000;
```

### Content
Edit data in `app/lib/constants.ts`:
- Vehicle specs
- Mission details
- Navigation links
- Social media URLs

### Fonts
Change fonts in `app/layout.tsx`:
```typescript
import { Inter, Space_Grotesk } from "next/font/google";
```

## 📱 Responsive Breakpoints

- **Mobile:** 320px - 768px (1 column)
- **Tablet:** 768px - 1024px (2 columns)
- **Desktop:** 1024px+ (3-4 columns)

## 🎯 Performance

- **Animations:** 60fps with GPU acceleration
- **Lazy Loading:** Images & 3D models load on demand
- **Code Splitting:** Automatic with Next.js App Router
- **Bundle Size:** Optimized with tree shaking

## 📝 To-Do (Optional Enhancements)

- [ ] Add real images from SpaceX/NASA
- [ ] Create custom Spline 3D rocket model
- [ ] Add video background to hero
- [ ] Implement launch timeline section
- [ ] Add more interactive micro-animations
- [ ] Connect email form to backend/API
- [ ] Add loading states/skeleton screens

## 🚀 Deploy

### Vercel (Recommended)
```bash
vercel deploy
```

### Other Platforms
```bash
npm run build
# Upload .next folder to hosting
```

## 📄 License

This is a practice project for learning modern web development. Feel free to use it as a template for your own projects.

## 🙏 Credits

- Design inspiration: [SpaceX](https://www.spacex.com/)
- Built with [Next.js](https://nextjs.org/)
- Animations: [Framer Motion](https://www.framer.com/motion/)
- 3D: [Spline](https://spline.design/)

---

**Built with ❤️ for learning professional UI/UX design and modern web development**

