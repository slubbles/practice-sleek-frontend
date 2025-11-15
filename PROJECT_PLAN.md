# SpaceX-Inspired Landing Page - Project Plan

## 🎯 Project Overview
A single-page, dark minimalist SpaceX-inspired landing page built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Spline 3D. Focus on rocket launches with professional UI/UX and smooth animations.

---

## 🛠 Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (.tsx)
- **Styling:** Tailwind CSS + Tailwind Typography
- **Animations:** Framer Motion
- **3D Graphics:** Spline (React integration)
- **Fonts:** Inter (body), Space Grotesk or similar (headings)
- **Assets:** Video backgrounds, high-res rocket images, 3D models

---

## 📐 Page Structure (Single Page)

### 1. **Hero Section** (Full Screen)
- **Background:** Dark video loop (rocket launch countdown/liftoff) with overlay OR Spline 3D rocket model
- **3D Element (Spline):** 
  - Interactive 3D rotating rocket model (Starship/Falcon 9)
  - User can drag to rotate
  - Idle animation loop
  - Mobile: Static fallback image for performance
- **Content:**
  - Large hero headline: "NEXT MISSION TO MARS" or similar
  - Subheadline with mission details
  - CTA buttons: "Watch Launch" + "Learn More"
  - Scroll indicator (animated down arrow)
- **Animations:**
  - Fade in + slide up on load
  - Parallax effect on text (moves slower than scroll)
  - 3D model subtle float animation

---

### 2. **Navigation Bar**
- **Style:** Fixed, transparent initially, becomes solid on scroll
- **Content:** Logo + Menu items (Missions, Vehicles, About, Contact)
- **Behavior:**
  - Smooth scroll to sections
  - Backdrop blur when solid
  - Mobile: Hamburger menu with slide-in drawer
- **Animation:** Slide down on page load

---

### 3. **Mission/Vehicle Cards Section**
- **Layout:** Grid of 3-4 large cards (Falcon 9, Falcon Heavy, Starship, Dragon)
- **Card Design:**
  - Full-bleed background image
  - Gradient overlay (dark to transparent)
  - Title + brief specs
  - "Explore" link/button
- **Optional 3D Enhancement:**
  - Small Spline 3D preview on hover
  - Or keep it performant with images only
- **Hover Effects:**
  - Scale + brightness increase (1.0 → 1.05)
  - Text slides up with more info reveal
  - Border glow effect
- **Animations:**
  - Stagger fade-in on scroll into view
  - Smooth hover transitions (0.3s ease)

---

### 4. **Featured Launch Section** (Full Screen)
- **Layout:** Split screen - Large image/video on left, content on right
- **Content:**
  - Mission name & patch
  - Launch date & time (with countdown timer)
  - Mission description
  - Key specs (payload, orbit, destination)
  - "Watch Replay" or "Set Reminder" CTA
- **3D Element Option:**
  - 3D Earth with orbit trajectory visualization
  - Animated spacecraft path to destination
- **Animations:**
  - Image parallax on scroll
  - Content slides in from right
  - Countdown numbers flip/animate
  - Orbit path draws on scroll into view

---

### 5. **Launch Gallery/Timeline** (Optional Simplified)
- **Layout:** Horizontal scrolling cards or vertical timeline
- **Content:** Recent/upcoming launches with dates, images, status badges
- **Cards Include:**
  - Mission thumbnail
  - Date & time
  - Status badge (Completed/Upcoming/Live)
  - Brief description
- **Animations:**
  - Scroll-triggered fade-ins
  - Horizontal scroll snap
  - Status badge pulse (for "Live" launches)
  - Hover: Card lifts with shadow

---

### 6. **Technology Showcase**
- **Layout:** Full-width section with 2-3 key tech highlights
- **Content:**
  - Reusability stats (e.g., "Landed boosters: 250+")
  - Engine specs with diagrams
  - Innovation highlights (Raptor engine, heat shield, etc.)
- **Visuals:** Large background images with text overlays
- **3D Element (Spline):**
  - Interactive 3D cutaway of Raptor engine
  - Exploded view animation
  - Rotate to see components
  - Desktop only for performance
- **Animations:**
  - Scroll parallax on images
  - Text reveal animations (fade + slide)
  - Number counter animations (e.g., 0 → 250+)
  - 3D model rotate on scroll progress

---

### 7. **Call-to-Action Section**
- **Design:** Centered, dramatic
- **Content:**
  - Bold statement: "Join the Mission to Mars"
  - Email signup or "Careers" + "Updates" buttons
- **Background:** Gradient or subtle video loop (stars/space)
- **Animations:** 
  - Button hover effects (scale, glow)
  - Input focus animations
  - Background subtle parallax

---

### 8. **Footer**
- **Style:** Minimal, dark gray on darker black
- **Content:**
  - Social links (Twitter/X, YouTube, Instagram, LinkedIn)
  - Quick links (Privacy, Terms, Careers, Press)
  - Copyright notice
  - SpaceX-style branding
- **Layout:** Single row or centered block
- **Hover:** Social icons scale and glow

---

## 🎨 Design System

### Color Palette
```css
/* Backgrounds */
--bg-primary: #000000;        /* Pure black */
--bg-secondary: #0A0A0A;      /* Subtle gray */
--bg-tertiary: #1A1A1A;       /* Card backgrounds */

/* Text */
--text-primary: #FFFFFF;      /* Main text */
--text-secondary: #B0B0B0;    /* Muted text */
--text-tertiary: #808080;     /* Subtle text */

/* Accents */
--accent-blue: #005288;       /* SpaceX blue */
--accent-cyan: #00D9FF;       /* Bright cyan */
--accent-success: #00FF88;    /* Success/Live status */

/* UI Elements */
--border: #2A2A2A;            /* Dividers */
--hover-bg: #1F1F1F;          /* Hover states */
```

### Typography
**Fonts:**
- Headings: Space Grotesk (700-900 weight), uppercase for major titles
- Body: Inter (400-500 weight)
- Mono: JetBrains Mono for technical specs

**Scale:**
```
Hero Title: text-6xl md:text-7xl lg:text-8xl (72-96px)
Section Titles: text-4xl md:text-5xl (48-60px)
Subsection: text-2xl md:text-3xl (30-36px)
Body Large: text-lg md:text-xl (18-20px)
Body: text-base (16px)
Small: text-sm (14px)
```

### Spacing
```
Section Padding: py-20 md:py-32 (80-128px)
Content Max Width: max-w-7xl (1280px)
Grid Gaps: gap-6 md:gap-8 (24-32px)
Card Padding: p-6 md:p-8 (24-32px)
```

### Borders & Radius
```
Border Radius: rounded-lg (8px) for cards
Border Width: border or border-2
Glow: box-shadow with accent colors
```

---

## ✨ Animation Strategy

### Framer Motion Patterns

**1. Scroll-triggered animations:**
```tsx
import { motion, useInView } from 'framer-motion';

const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
```

**2. Stagger children:**
```tsx
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }}
>
  {items.map(item => (
    <motion.div variants={itemVariants} />
  ))}
</motion.div>
```

**3. Hover animations:**
```tsx
<motion.div
  whileHover={{ scale: 1.05, brightness: 1.2 }}
  transition={{ duration: 0.3 }}
>
```

**4. Parallax scrolling:**
```tsx
import { useScroll, useTransform } from 'framer-motion';

const { scrollY } = useScroll();
const y = useTransform(scrollY, [0, 500], [0, 150]);

<motion.div style={{ y }}>
```

### Spline Integration

**Performance considerations:**
- Maximum 2 Spline scenes per page
- Lazy load Spline components
- Mobile: Show static fallback images
- Use `loading="lazy"` attribute

**Example implementation:**
```tsx
import Spline from '@splinetool/react-spline';
import { useState } from 'react';

export function SplineRocket() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className="relative w-full h-full">
      {!isLoaded && <Skeleton />}
      <Spline
        scene="https://prod.spline.design/[scene-id]/scene.splinecode"
        onLoad={() => setIsLoaded(true)}
        className={isLoaded ? 'opacity-100' : 'opacity-0'}
      />
    </div>
  );
}
```

### Performance Optimization
- Use `will-change: transform` sparingly
- Lazy load images below fold with Next.js Image
- Debounce scroll events
- Use CSS transforms instead of position changes
- Reduce motion for users with `prefers-reduced-motion`

---

## 📁 Project Structure

```
/app
  /fonts                      # Local font files (optional)
  layout.tsx                  # Root layout, metadata, fonts
  page.tsx                    # Main landing page
  globals.css                 # Tailwind imports + custom styles

/components
  /sections
    Hero.tsx                  # Hero with Spline 3D rocket
    Navigation.tsx            # Fixed nav with scroll behavior
    VehicleCards.tsx          # Mission/vehicle grid
    FeaturedLaunch.tsx        # Launch details with countdown
    LaunchTimeline.tsx        # Upcoming launches (optional)
    Technology.tsx            # Tech showcase with 3D engine
    CTA.tsx                   # Call to action
    Footer.tsx                # Footer links
  
  /ui
    Button.tsx                # Reusable button component
    Card.tsx                  # Card wrapper with hover
    ScrollIndicator.tsx       # Animated scroll arrow
    CountdownTimer.tsx        # Live countdown component
    SplineLoader.tsx          # Spline wrapper with loading
    
  /animations
    variants.ts               # Framer Motion variants
    hooks.ts                  # Custom animation hooks

/lib
  utils.ts                    # cn() helper, classnames
  constants.ts                # Mission data, vehicle specs
  types.ts                    # TypeScript interfaces

/public
  /videos
    hero-background.mp4       # Hero video loop
  /images
    /rockets                  # Rocket images
    /launches                 # Launch photos
    /logos                    # SpaceX logos, mission patches
    rocket-fallback.jpg       # Mobile fallback for Spline
  
tailwind.config.ts            # Custom theme, colors, animations
tsconfig.json                 # TypeScript config
next.config.js                # Next.js config (image domains)
package.json                  # Dependencies
```

---

## 🚀 Implementation Phases

### Phase 1: Setup & Foundation (30 min)

**Goal:** Initialize project with all required dependencies and base configuration

- [ ] Run `npx create-next-app@latest` with TypeScript, App Router, Tailwind CSS
  - [ ] Name: `spacex-landing` or similar
  - [ ] Enable: TypeScript, ESLint, Tailwind CSS, App Router
  - [ ] Disable: src/ directory (use app/ directly)
- [ ] Install additional dependencies
  - [ ] Run `npm install framer-motion clsx tailwind-merge`
  - [ ] Run `npm install @splinetool/react-spline @splinetool/runtime`
- [ ] Setup Google Fonts
  - [ ] Add Inter and Space Grotesk to `app/layout.tsx`
  - [ ] Configure font variables in layout
  - [ ] Test font rendering
- [ ] Configure Tailwind
  - [ ] Update `tailwind.config.ts` with custom colors (black, gray, blue)
  - [ ] Add custom animations (fadeIn, slideUp, glow)
  - [ ] Add font family configurations
  - [ ] Test with a simple div in page.tsx
- [ ] Create folder structure
  - [ ] Create `/app/components/sections` folder
  - [ ] Create `/app/components/ui` folder
  - [ ] Create `/app/components/animations` folder
  - [ ] Create `/app/lib` folder
  - [ ] Create `/public/videos` and `/public/images` folders
- [ ] Setup global styles
  - [ ] Add custom CSS variables to `globals.css`
  - [ ] Add smooth scroll behavior
  - [ ] Add base typography styles
  - [ ] Test dark background renders

---

### Phase 2: Core Components & Utilities (1 hour)

**Goal:** Build reusable components and utility functions for the entire app

#### 2.1: Utility Functions
- [ ] Create `/lib/utils.ts`
  - [ ] Add `cn()` function (clsx + tailwind-merge)
  - [ ] Add type definitions
  - [ ] Test with sample className merge
- [ ] Create `/lib/constants.ts`
  - [ ] Add vehicle data array (name, specs, image paths)
  - [ ] Add mission data object
  - [ ] Add navigation links array
  - [ ] Add social media links array
- [ ] Create `/lib/types.ts`
  - [ ] Define `Vehicle` interface
  - [ ] Define `Mission` interface
  - [ ] Define `LaunchEvent` interface

#### 2.2: Animation Variants
- [ ] Create `/components/animations/variants.ts`
  - [ ] Add `fadeInUp` variant
  - [ ] Add `staggerContainer` variant
  - [ ] Add `scaleOnHover` variant
  - [ ] Add `slideInFromRight` variant
  - [ ] Export all variants
- [ ] Create `/components/animations/hooks.ts`
  - [ ] Add `useScrollAnimation` custom hook
  - [ ] Add `useParallax` custom hook (optional)

#### 2.3: UI Components
- [ ] Create `/components/ui/Button.tsx`
  - [ ] Add variants: primary, secondary, outline
  - [ ] Add hover animations with Framer Motion
  - [ ] Add loading state (optional)
  - [ ] Make fully typed with TypeScript
  - [ ] Test with sample button renders
- [ ] Create `/components/ui/Card.tsx`
  - [ ] Add base card wrapper with padding
  - [ ] Add hover scale effect
  - [ ] Add optional image background prop
  - [ ] Add gradient overlay option
  - [ ] Test with sample content

#### 2.4: Navigation Component
- [ ] Create `/components/sections/Navigation.tsx`
  - [ ] Build desktop nav (logo + links)
  - [ ] Add scroll-based background change (transparent → solid)
  - [ ] Add backdrop blur effect
  - [ ] Implement smooth scroll to sections
  - [ ] Add Framer Motion animations (slide down on load)
  - [ ] Make sticky with `fixed` positioning
  - [ ] Test scroll behavior
- [ ] Add mobile navigation
  - [ ] Create hamburger menu icon (animated)
  - [ ] Build slide-in drawer with Framer Motion
  - [ ] Add mobile menu links
  - [ ] Close on link click
  - [ ] Test on mobile viewport

---

### Phase 3: Hero Section (45 min)

**Goal:** Create impactful full-screen hero with 3D rocket or video background

#### 3.1: Spline Integration
- [ ] Find/create Spline rocket model
  - [ ] Search Spline community or create basic rocket
  - [ ] Export scene URL
  - [ ] Test scene loads in browser
- [ ] Create `/components/ui/SplineLoader.tsx`
  - [ ] Add loading skeleton/placeholder
  - [ ] Handle `onLoad` event
  - [ ] Add error fallback (show static image)
  - [ ] Add mobile detection (show fallback on mobile)
  - [ ] Test loading states

#### 3.2: Hero Component
- [ ] Create `/components/sections/Hero.tsx`
  - [ ] Add full-screen container (`h-screen`)
  - [ ] Integrate SplineLoader component
  - [ ] Add dark overlay for text contrast
  - [ ] Structure content wrapper (centered)
- [ ] Add hero content
  - [ ] Main headline with large text (text-7xl+)
  - [ ] Subheadline with mission details
  - [ ] Two CTA buttons (primary + secondary)
  - [ ] Style with Space Grotesk font, uppercase
- [ ] Add animations
  - [ ] Fade in + slide up on page load
  - [ ] Stagger buttons animation
  - [ ] Add delay to content (appear after 0.5s)
- [ ] Create scroll indicator
  - [ ] Create `/components/ui/ScrollIndicator.tsx`
  - [ ] Add animated down arrow icon
  - [ ] Add bounce animation (CSS or Framer Motion)
  - [ ] Position at bottom center
  - [ ] Hide on scroll
- [ ] Add parallax effect
  - [ ] Use `useScroll` and `useTransform` from Framer Motion
  - [ ] Apply to hero text (slower scroll rate)
  - [ ] Test smooth movement
- [ ] Responsive design
  - [ ] Adjust text sizes for mobile (text-5xl → text-7xl)
  - [ ] Stack buttons vertically on small screens
  - [ ] Show static image fallback on mobile
  - [ ] Test on 375px viewport

---

### Phase 4: Vehicle Cards Section (30 min)

**Goal:** Create interactive grid showcasing SpaceX vehicles

- [ ] Create `/components/sections/VehicleCards.tsx`
  - [ ] Add section wrapper with padding
  - [ ] Add section title ("Our Fleet" or similar)
  - [ ] Create grid layout (1-2-4 columns responsive)
  - [ ] Map over vehicle data from constants
- [ ] Build individual card
  - [ ] Full-bleed background image with `bg-cover`
  - [ ] Dark gradient overlay (bottom to top)
  - [ ] Vehicle name and tagline
  - [ ] Key specs (payload, reusability)
  - [ ] "Explore" CTA button
  - [ ] Use Card component as base
- [ ] Add hover effects
  - [ ] Scale to 1.05 on hover
  - [ ] Increase brightness (filter or overlay opacity)
  - [ ] Slide up additional info
  - [ ] Add blue glow border effect
  - [ ] Smooth transition (0.3s ease)
- [ ] Add scroll animations
  - [ ] Implement `useInView` hook
  - [ ] Stagger fade-in for each card (0.1s delay)
  - [ ] Slide up from bottom (y: 50 → 0)
  - [ ] Trigger once on first view
  - [ ] Test with slow scroll
- [ ] Responsive design
  - [ ] 1 column on mobile (< 640px)
  - [ ] 2 columns on tablet (640px - 1024px)
  - [ ] 4 columns on desktop (1024px+)
  - [ ] Adjust card height for mobile
  - [ ] Test touch interactions

---

### Phase 5: Featured Launch Section (45 min)

**Goal:** Highlight a specific mission with countdown and details

#### 5.1: Countdown Timer Component
- [ ] Create `/components/ui/CountdownTimer.tsx`
  - [ ] Accept target date as prop
  - [ ] Calculate time difference (days, hours, mins, secs)
  - [ ] Update every second with `setInterval`
  - [ ] Display in grid (4 boxes: D/H/M/S)
  - [ ] Add flip animation on number change (optional)
  - [ ] Handle past dates ("Completed")
  - [ ] Test with near-future date

#### 5.2: Featured Launch Component
- [ ] Create `/components/sections/FeaturedLaunch.tsx`
  - [ ] Create split-screen layout (50/50 or 60/40)
  - [ ] Left: Large mission image/video
  - [ ] Right: Content area
  - [ ] Make responsive (stack on mobile)
- [ ] Add content
  - [ ] Mission name (large, bold)
  - [ ] Mission patch/logo
  - [ ] Countdown timer component
  - [ ] Launch date and time (formatted)
  - [ ] Mission description (2-3 paragraphs)
  - [ ] Key specs list (payload, destination, etc.)
  - [ ] CTA button ("Watch Replay" or "Set Reminder")
- [ ] Add animations
  - [ ] Image parallax on scroll
  - [ ] Content slides in from right with fade
  - [ ] Specs list items stagger in
  - [ ] Button hover effects
- [ ] Optional: 3D Earth orbit
  - [ ] Find or create simple Spline scene
  - [ ] Show orbit trajectory path
  - [ ] Animate spacecraft along path
  - [ ] Add only if time permits
- [ ] Responsive design
  - [ ] Stack layout vertically on mobile
  - [ ] Image above, content below
  - [ ] Full-width on small screens
  - [ ] Adjust spacing and padding

---

### Phase 6: Technology Showcase (45 min)

**Goal:** Highlight SpaceX innovations with 3D interactive element

#### 6.1: Tech Section Layout
- [ ] Create `/components/sections/Technology.tsx`
  - [ ] Full-width section with dark background
  - [ ] Section title: "Innovation & Technology"
  - [ ] Grid layout for tech highlights (2-3 items)
  - [ ] Each highlight: title, description, stat
- [ ] Add tech highlights
  - [ ] Highlight 1: "Reusability" (250+ landings stat)
  - [ ] Highlight 2: "Raptor Engine" (specs)
  - [ ] Highlight 3: "Starlink Deployment" or similar
  - [ ] Add background images with parallax
  - [ ] Add gradient overlays for text readability

#### 6.2: Animated Stats
- [ ] Create number counter animation
  - [ ] Use Framer Motion's `animate` prop
  - [ ] Count from 0 to target number
  - [ ] Trigger on scroll into view
  - [ ] Add easing for smooth count
  - [ ] Test with large numbers (250+)
- [ ] Apply to all stat numbers
  - [ ] Landings: 0 → 250+
  - [ ] Engines: 0 → 33
  - [ ] Other metrics as needed

#### 6.3: Spline 3D Engine
- [ ] Find/create Raptor engine 3D model
  - [ ] Search Spline community for rocket engine
  - [ ] Or create simple engine cutaway
  - [ ] Export scene URL
- [ ] Add Spline scene to section
  - [ ] Create dedicated area (50% width)
  - [ ] Use SplineLoader component
  - [ ] Add interaction: rotate on drag
  - [ ] Optional: Exploded view animation
  - [ ] Desktop only (hide on mobile)
- [ ] Add fallback for mobile
  - [ ] Show static engine diagram/image
  - [ ] Use responsive utility classes
  - [ ] Test on mobile viewport

#### 6.4: Animations & Effects
- [ ] Scroll-triggered animations
  - [ ] Section title fades in
  - [ ] Highlights stagger in from left/right
  - [ ] Stats count up when visible
  - [ ] 3D model fades in
- [ ] Parallax on background images
  - [ ] Use `useScroll` and `useTransform`
  - [ ] Apply to highlight backgrounds
  - [ ] Test smooth scrolling

---

### Phase 7: Additional Sections (30 min)

**Goal:** Complete the page with CTA, timeline (optional), and footer

#### 7.1: Launch Timeline (Optional)
- [ ] Create `/components/sections/LaunchTimeline.tsx`
  - [ ] Horizontal scrolling container
  - [ ] Map over launch events array
  - [ ] Each event: card with image, date, status
  - [ ] Status badges: "Completed", "Upcoming", "Live"
  - [ ] Add scroll snap for smooth navigation
- [ ] Add animations
  - [ ] Cards fade in on scroll into view
  - [ ] Status badge pulse for "Live"
  - [ ] Hover: Card lifts with shadow
- [ ] Skip if time is short (marked optional)

#### 7.2: Call-to-Action Section
- [ ] Create `/components/sections/CTA.tsx`
  - [ ] Full-width section with gradient/video background
  - [ ] Centered content layout
  - [ ] Bold headline: "Join the Mission to Mars"
  - [ ] Subheadline: encouraging text
  - [ ] Two CTAs: "Get Updates" + "Careers" buttons
  - [ ] Or: Email signup form (input + submit button)
- [ ] Add animations
  - [ ] Fade in + scale on scroll into view
  - [ ] Button hover effects (scale, glow)
  - [ ] Input focus animations (border glow)
- [ ] Style form (if using email signup)
  - [ ] Large input field with dark background
  - [ ] Placeholder text styling
  - [ ] Submit button with hover effect
  - [ ] Success message (optional)

#### 7.3: Footer
- [ ] Create `/components/sections/Footer.tsx`
  - [ ] Dark gray on darker black background
  - [ ] Three columns or centered single column
  - [ ] Column 1: Logo + tagline
  - [ ] Column 2: Quick links (Privacy, Terms, Careers, Press)
  - [ ] Column 3: Social media icons (Twitter, YouTube, Instagram)
  - [ ] Bottom: Copyright text
- [ ] Add hover effects
  - [ ] Links: underline or color change
  - [ ] Social icons: scale + glow
  - [ ] Smooth transitions
- [ ] Responsive design
  - [ ] Stack columns on mobile
  - [ ] Center align on small screens
  - [ ] Touch-friendly link sizing

---

### Phase 8: Animations & Polish (1 hour)

**Goal:** Refine all animations and add micro-interactions for premium feel

#### 8.1: Animation Refinement
- [ ] Review all Framer Motion animations
  - [ ] Ensure consistent timing (0.3-0.6s durations)
  - [ ] Use consistent easing (easeOut, easeInOut)
  - [ ] Check all `initial`, `animate`, `transition` props
  - [ ] Remove any animation conflicts
- [ ] Fine-tune scroll animations
  - [ ] Adjust `useInView` margins (-50px to -100px)
  - [ ] Ensure animations trigger at right time
  - [ ] Test with fast and slow scrolling
  - [ ] Add `once: true` to prevent re-triggers
- [ ] Test all hover effects
  - [ ] Buttons scale smoothly
  - [ ] Cards transform without jank
  - [ ] Links respond immediately
  - [ ] No layout shift on hover

#### 8.2: Smooth Scroll Behavior
- [ ] Implement smooth scroll to sections
  - [ ] Add IDs to each section
  - [ ] Navigation links scroll to sections
  - [ ] Use `scroll-behavior: smooth` or JS library
  - [ ] Test anchor navigation
- [ ] Add scroll progress indicator (optional)
  - [ ] Create progress bar at top
  - [ ] Update width based on scroll position
  - [ ] Use `useScroll` from Framer Motion
  - [ ] Style with accent color

#### 8.3: Loading States
- [ ] Add loading states for Spline
  - [ ] Skeleton loaders while 3D loads
  - [ ] Smooth opacity transition when ready
  - [ ] Test with slow 3G throttling
- [ ] Add page load animation (optional)
  - [ ] Fade in entire page
  - [ ] Or: Hero appears first, rest follows
  - [ ] Keep minimal (don't delay content)

#### 8.4: Micro-interactions
- [ ] Button interactions
  - [ ] Add ripple effect on click (optional)
  - [ ] Slight bounce on hover
  - [ ] Active state (press down)
- [ ] Form interactions
  - [ ] Input focus: border glow
  - [ ] Label float animation (if using floating labels)
  - [ ] Error states with shake animation
- [ ] Card interactions
  - [ ] Hover: lift with shadow
  - [ ] Click: subtle scale down then up
  - [ ] Focus states for keyboard navigation

#### 8.5: Test All Interactions
- [ ] Click through entire page
- [ ] Hover over all interactive elements
- [ ] Test keyboard navigation (Tab, Enter)
- [ ] Test smooth scrolling
- [ ] Check animation performance (no jank)
- [ ] Verify 60fps in Chrome DevTools

---

### Phase 9: Responsive Design (45 min)

**Goal:** Ensure flawless experience across all device sizes

#### 9.1: Mobile Testing (320px - 768px)
- [ ] Test on 375px viewport (iPhone standard)
  - [ ] Hero: text readable, buttons stacked
  - [ ] Navigation: hamburger menu works
  - [ ] Vehicle cards: 1 column, proper spacing
  - [ ] Featured launch: stacked layout
  - [ ] Technology: single column, no 3D
  - [ ] CTA: centered, buttons stacked
  - [ ] Footer: single column
- [ ] Test on 320px viewport (smallest)
  - [ ] All content fits without horizontal scroll
  - [ ] Text doesn't overflow
  - [ ] Buttons are touch-friendly (min 44x44px)
  - [ ] Images scale properly
- [ ] Fix any mobile issues
  - [ ] Reduce font sizes if needed
  - [ ] Adjust padding/margins
  - [ ] Ensure touch targets are large enough
  - [ ] Test hamburger menu open/close

#### 9.2: Tablet Testing (768px - 1024px)
- [ ] Test on 768px viewport (iPad)
  - [ ] Hero: looks balanced
  - [ ] Vehicle cards: 2 columns
  - [ ] Featured launch: side-by-side or stacked?
  - [ ] Technology: 2 columns
  - [ ] Navigation: desktop or mobile menu?
- [ ] Test on 1024px viewport (iPad Pro)
  - [ ] Transition to desktop layout
  - [ ] 3-4 column grids
  - [ ] Desktop navigation visible
- [ ] Fix any tablet-specific issues
  - [ ] Adjust breakpoints if needed
  - [ ] Ensure proper spacing
  - [ ] Test both portrait and landscape

#### 9.3: Desktop Testing (1024px+)
- [ ] Test on 1440px viewport (standard laptop)
  - [ ] All sections look balanced
  - [ ] Content doesn't feel stretched
  - [ ] Proper max-width constraints (max-w-7xl)
  - [ ] Images are high quality
- [ ] Test on 1920px viewport (full HD)
  - [ ] Content centered properly
  - [ ] No awkward empty space
  - [ ] Background images cover fully
- [ ] Test on ultrawide (2560px+)
  - [ ] Content stays within max-width
  - [ ] Background extends fully
  - [ ] No layout breaks

#### 9.4: Cross-Device Checks
- [ ] Test all breakpoint transitions
  - [ ] No sudden jumps in layout
  - [ ] Smooth transitions between sizes
  - [ ] Media queries working correctly
- [ ] Verify typography scales
  - [ ] Responsive text sizes working
  - [ ] Line heights readable on all sizes
  - [ ] No text overflow issues
- [ ] Check image responsiveness
  - [ ] Images load appropriate sizes
  - [ ] No pixelation or blur
  - [ ] Lazy loading working

---

### Phase 10: Optimization & SEO (30 min)

**Goal:** Optimize performance, accessibility, and search engine visibility

#### 10.1: Image Optimization
- [ ] Optimize all images
  - [ ] Convert to WebP format
  - [ ] Create multiple sizes for responsive images
  - [ ] Compress without quality loss (TinyPNG, Squoosh)
  - [ ] Use Next.js Image component with proper sizes
- [ ] Setup lazy loading
  - [ ] Images below fold load lazily
  - [ ] Use `loading="lazy"` attribute
  - [ ] Add proper width/height to prevent layout shift
  - [ ] Test with Network throttling

#### 10.2: Video Optimization
- [ ] Compress hero video
  - [ ] Use H.264 codec
  - [ ] 720p max resolution
  - [ ] Target 2-5MB file size
  - [ ] Add poster image for instant display
- [ ] Add video attributes
  - [ ] `autoplay`, `muted`, `loop`, `playsinline`
  - [ ] Test autoplay works on mobile
  - [ ] Fallback image if video fails

#### 10.3: SEO & Meta Tags
- [ ] Update `app/layout.tsx` metadata
  - [ ] Title: "SpaceX - The Future of Space Travel"
  - [ ] Description: compelling 150-160 characters
  - [ ] Keywords (optional, less important now)
- [ ] Add Open Graph tags
  - [ ] `og:title`, `og:description`
  - [ ] `og:image` (1200x630px preview image)
  - [ ] `og:type` (website)
  - [ ] Test with Facebook/LinkedIn debugger
- [ ] Add Twitter Card tags
  - [ ] `twitter:card` (summary_large_image)
  - [ ] `twitter:title`, `twitter:description`
  - [ ] `twitter:image`
  - [ ] Test with Twitter card validator
- [ ] Add favicon
  - [ ] Create favicon.ico (32x32)
  - [ ] Add to `/app` folder
  - [ ] Create apple-touch-icon (180x180)
  - [ ] Test favicon appears

#### 10.4: Accessibility
- [ ] Add ARIA labels
  - [ ] Navigation: `role="navigation"`, `aria-label`
  - [ ] Buttons: descriptive `aria-label` if icon-only
  - [ ] Landmark regions: `<main>`, `<footer>`, etc.
- [ ] Test keyboard navigation
  - [ ] All interactive elements focusable
  - [ ] Focus visible (outline or ring)
  - [ ] Tab order makes sense
  - [ ] Enter/Space activates buttons/links
- [ ] Add reduced motion support
  - [ ] Detect `prefers-reduced-motion`
  - [ ] Disable or reduce animations if preferred
  - [ ] Test with OS setting enabled
- [ ] Check color contrast
  - [ ] Text on dark background meets WCAG AA (4.5:1)
  - [ ] Test with contrast checker tool
  - [ ] Adjust colors if needed

#### 10.5: Performance Audit
- [ ] Run Lighthouse audit
  - [ ] Open Chrome DevTools → Lighthouse
  - [ ] Run audit in incognito mode
  - [ ] Target: 90+ Performance, 100 Accessibility
  - [ ] Review suggestions
- [ ] Fix performance issues
  - [ ] Eliminate render-blocking resources
  - [ ] Defer non-critical JavaScript
  - [ ] Minimize main thread work
  - [ ] Reduce unused JavaScript
- [ ] Test on slow connection
  - [ ] Chrome DevTools: Throttle to Slow 3G
  - [ ] Page should load in < 5s
  - [ ] Loading states should appear
  - [ ] Critical content loads first
- [ ] Verify production build
  - [ ] Run `npm run build`
  - [ ] Check build output for errors
  - [ ] Test production build locally (`npm start`)
  - [ ] Ensure all optimizations applied

#### 10.6: Final Testing
- [ ] Cross-browser testing
  - [ ] Chrome (latest)
  - [ ] Firefox (latest)
  - [ ] Safari (latest)
  - [ ] Edge (latest)
- [ ] Test on real devices
  - [ ] iPhone (Safari)
  - [ ] Android phone (Chrome)
  - [ ] iPad (Safari)
- [ ] Review entire page
  - [ ] Click every link and button
  - [ ] Verify all images load
  - [ ] Check all animations work
  - [ ] Test all interactive elements
  - [ ] Read through all content for typos

---

## 📦 Dependencies

```json
{
  "name": "spacex-landing",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.16",
    "@splinetool/react-spline": "^2.2.6",
    "@splinetool/runtime": "^1.0.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.10.6",
    "@types/react": "^18.2.46",
    "@types/react-dom": "^18.2.18",
    "typescript": "^5.3.3",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.32",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.0.4"
  }
}
```

---

## 🎬 Key Features Summary

✅ Full-screen hero with Spline 3D rocket model  
✅ Interactive 3D elements (drag to rotate)  
✅ Smooth scroll navigation with Framer Motion  
✅ Vehicle cards with hover effects and stagger animations  
✅ Featured launch with live countdown timer  
✅ 3D engine cutaway in technology section  
✅ Scroll-triggered parallax effects  
✅ Dark minimalist design (SpaceX-inspired)  
✅ Fully responsive (mobile fallbacks for 3D)  
✅ TypeScript for type safety  
✅ Optimized performance with lazy loading  
✅ Accessible (keyboard navigation, reduced motion)  

---

## 📝 Content Outline

### Real Content Sources:
- **SpaceX website:** Mission descriptions, vehicle specs
- **Wikipedia:** Technical specifications
- **NASA/SpaceX media library:** High-res images (public domain)
- **YouTube:** Launch videos (embed or download)
- **SpaceX social media:** Recent updates and announcements
- **Spline Community:** Pre-made rocket 3D models

### Sections Content:

**1. Hero:**
- Headline: "NEXT MISSION TO MARS"
- Subheadline: "Starship prepares for the journey to the Red Planet"
- CTAs: "Watch Live" + "Learn More"

**2. Vehicles (4 cards):**
- **Falcon 9:** Reusable rocket, LEO missions, 22.8 tons to LEO
- **Falcon Heavy:** Heavy-lift rocket, 63.8 tons to LEO, Mars missions
- **Starship:** Fully reusable, 100+ tons to LEO, Mars colonization
- **Dragon:** Crew & cargo capsule, ISS missions, 6,000 kg cargo

**3. Featured Launch:**
- Mission: "Starship Flight Test 5"
- Date: "March 2026"
- Description: First orbital refueling test
- Specs: 120t to LEO, Raptor 3 engines

**4. Technology:**
- Stat 1: "250+ Successful Landings"
- Stat 2: "33 Raptor Engines per Starship"
- Stat 3: "100% Reusability Target"
- Feature: Interactive Raptor engine 3D model

**5. CTA:**
- "Join the Mission to Mars"
- "Get updates on humanity's journey to becoming multiplanetary"

---

## 🎨 Spline Scenes Needed

### Priority 1: Hero Section
- **Scene:** Starship or Falcon 9 rocket (full body)
- **Animations:** Idle rotation, subtle float
- **Interactivity:** User drag to rotate
- **Lighting:** Dramatic side lighting on dark background
- **Export:** Optimized for web (< 5MB)

### Priority 2: Technology Section
- **Scene:** Raptor engine cutaway/exploded view
- **Animations:** Slow rotation, parts separate on hover
- **Interactivity:** Click to explode/collapse
- **Labels:** Optional text labels for components
- **Export:** Desktop only (can be heavier)

### Optional: Featured Launch
- **Scene:** Earth with orbit trajectory
- **Animations:** Satellite/spacecraft path animation
- **Interactivity:** Minimal (auto-play)
- **Export:** Very light (< 2MB)

---

## 🎯 Success Criteria

- ✅ Clean, professional SpaceX-aesthetic UI
- ✅ Smooth 60fps animations (no jank)
- ✅ 3D elements load quickly (< 3s on good connection)
- ✅ Mobile-responsive down to 320px
- ✅ Accessible (WCAG 2.1 AA compliance)
- ✅ Fast load times (< 3s on 3G, < 1s on cable)
- ✅ Lighthouse score: 90+ performance, 100 accessibility
- ✅ Works on Chrome, Firefox, Safari, Edge
- ✅ Impressive portfolio piece showcasing modern web skills

---

## 🐛 Potential Challenges & Solutions

### Challenge 1: Spline Performance
**Issue:** 3D models can be heavy and slow to load  
**Solution:** 
- Optimize scenes in Spline editor (reduce polygons)
- Use loading skeletons
- Implement lazy loading
- Mobile: Show static images instead

### Challenge 2: Video Background Size
**Issue:** Large video files impact load time  
**Solution:**
- Compress video (H.264, 720p max)
- Use poster image for instant display
- Consider using animated gradient as fallback

### Challenge 3: Smooth Scrolling Performance
**Issue:** Too many animations can cause jank  
**Solution:**
- Use `will-change` strategically
- Debounce scroll events
- Use CSS transforms (GPU-accelerated)
- Test on mid-range devices

### Challenge 4: Countdown Timer Accuracy
**Issue:** JavaScript timers can drift  
**Solution:**
- Calculate diff from target time each tick
- Use `requestAnimationFrame` for smooth updates
- Sync with server time if needed

---

## 📚 Resources & References

### Design Inspiration:
- SpaceX official website
- Apple product pages (animation style)
- Awwwards winners (dark themes)
- Behance: "SpaceX redesign" projects

### Technical Docs:
- Next.js App Router: https://nextjs.org/docs
- Framer Motion: https://www.framer.com/motion/
- Spline React: https://docs.spline.design/
- Tailwind CSS: https://tailwindcss.com/docs

### Assets:
- SpaceX Flickr (public photos): https://www.flickr.com/photos/spacex/
- NASA Image Library: https://images.nasa.gov/
- Spline Community: https://spline.design/community
- Free Space Videos: Pexels, Pixabay

---

**Ready to build! 🚀**
