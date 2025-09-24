# Copilot Instructions - Event Planning Website

## Project Overview
This is a customer-facing React frontend for an event planning business. The website allows customers to browse services, view galleries, and book event planning packages through a multi-step booking flow.

**Ask Questions** to clarify requirements and ensure implementation meets business needs.
**Stop rewriting everything** - just write the code that is missing or to be revised.

## Tech Stack & Architecture
- **React 19** with functional components and hooks
- **Vite** for build system and development server
- **React Router DOM 7** for client-side routing with nested routes
- **Tailwind CSS 4** + **DaisyUI 5** for styling with custom theme
- **GSAP 3** with ScrollTrigger for complex animations
- **FullCalendar** for interactive booking calendar
- **Lucide React** + **React Icons** for iconography

## Project Structure Patterns

### Component Organization
```
src/Components/
  Common/           # Reusable components (WavePattern, PolaroidCard, CircleIcon)
  Index/            # Landing page sections (ServiceSection/, ReviewSection/, etc.)
  Booking/          # Multi-step booking flow components
  Gallery/          # Gallery display components
  Header/           # Navigation components
```

### Routing Architecture
- **Nested Routes**: Main booking flow uses nested routing (`/booking/service`, `/booking/date`, `/booking/details`)
- **Context Provider**: `BookingProvider` wraps entire app in `main.jsx` for booking state management
- **Route Components**: Located in `src/Routes/` (Index.jsx, Booking.jsx, About.jsx, Gallery.jsx)

### Animation Patterns with GSAP
```jsx
// Standard GSAP + ScrollTrigger pattern used throughout
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        }
      }
    );
  }, containerRef);
  return () => ctx.revert(); // Always cleanup
}, []);
```


## Key Development Patterns

### API Integration

- **Public REST Endpoints**: All data (images, reviews, bookings) is fetched from public REST API endpoints—no authentication required for frontend fetches.
- **Environment Variable**: `VITE_SEBS_API_URL` for backend API base URL (set in Vercel dashboard or `.env`).
- **Fetch Pattern**: Use native fetch with promise chains, not async/await.
- **Error Handling**: Only add user-facing error handling where necessary (e.g., booking failures, critical data fetches). Log errors to console for non-critical issues.
```jsx
fetch(`${import.meta.env.VITE_SEBS_API_URL}/api/booking/request`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(requestBody),
})
.then(res => res.ok ? res.json() : Promise.reject(res))
.then(data => { /* handle success */ })
.catch(error => {
  // Show alert only if user needs to know
  alert("Booking failed. Please try again later.");
  console.error(error);
});
```

### Booking Flow State Management
- **Context**: `BookingContext` manages booking state across steps
- **State Shape**: `{ service: null, date: null, form: {} }`
- **Navigation**: Each step updates context then navigates to next route


### Styling & Performance Conventions
- **Custom DaisyUI Theme**: "eventplanner" theme with warm color palette defined in `index.css`
- **Color Classes**: Use hex colors for custom elements (`bg-[#efaac3]`, `text-[#204558]`)
- **Component Sizing**: Consistent use of h-48, w-32 style sizing
- **Font Classes**: `font-yeseva`, `font-corben-bold`, `font-montserrat-alt` (custom fonts)
- **Lazy Loading**: Use `React.lazy` and `Suspense` for code-splitting large components (e.g., Gallery, Booking). For images, use `loading="lazy"` or a lazy-load library for faster page loads.

### Animation & Visual Effects
- **WavePattern**: Reusable SVG background component with GSAP animations
- **Staggered Animations**: Cards/elements use stagger: 0.3 pattern
- **Scroll Animations**: Consistent "top 80%" ScrollTrigger start points
- **AnimatedBackground**: Complex floating element system for landing page

## Component Communication
- **Service Selection**: Services array passed down with onClick handlers
- **Form Data**: Booking forms use controlled components with validation
- **Calendar Integration**: FullCalendar component integrated with booking date selection


## Development & Deployment Workflow
- **Dev Server**: `npm run dev` (Vite)
- **Build**: `npm run build` (Vite build)
- **Linting**: `npm run lint` (ESLint 9 with React hooks plugin)
- **Deployment**: Deploys to Vercel. Set `VITE_SEBS_API_URL` in Vercel project settings for production API endpoint.

## Critical Implementation Notes
- **GSAP Context**: Always use `gsap.context()` and cleanup with `ctx.revert()`
- **Responsive Design**: Mobile-first approach with lg: breakpoints
- **Background Layers**: Use z-index layering for complex backgrounds (z-0, z-10, z-20)
- **Service Cards**: Two variants - ServiceCards.jsx (showcase) vs ServiceCard.jsx (booking)
- **Color Consistency**: Maintain consistent color palette across components using CSS custom properties

