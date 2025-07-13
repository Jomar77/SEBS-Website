# Copilot Instructions - Event Planning Website

## Project Overview
This is a customer-facing React frontend for an event planning business. The website allows customers to browse services, view galleries, and book event planning packages.

## Tech Stack
- **React** with functional components and hooks
- **React Router DOM** for navigation
- **Tailwind CSS** for styling
- **DaisyUI** for UI components
- **GSAP** for scroll animations
- **Framer Motion** for other animations
- **Fetch API** for HTTP requests

## Directory Structure
```
src/
├── components/        # Reusable UI components
├── routes/           # Page components
├── context/          # Global context providers
├── services/         # API service functions
├── utils/            # Helper functions
├── css/              # Custom CSS files
└── App.js            # Main app with Outlet
```

## Key Features
- Responsive design (mobile-first approach)
- Smooth scroll animations with GSAP
- Interactive booking system with calendar
- Image galleries with hover effects
- Contact forms with validation
- Service package selection
- Customer reviews section

## Pages Structure

### 1. Index (Home) Page (`/`)
**Sections in order:**
1. **Hero Section** - Main banner with CTA button linking to `/book`
2. **Services Showcase** - Display main services (Venue Design, Photobooth, Grazing Cart)
3. **Animated Image Showcase** - GSAP-powered image carousel/gallery
4. **Package Showcase** - Featured packages with pricing
5. **Customer Reviews** - Testimonials section
6. **Footer** - Contact info and links

### 2. About Us Page (`/about`)
**Sections in order:**
1. **About Us Description** - Company story and mission
2. **Service Showcase** - Detailed view of each service offered
3. **Contact Form** - Get in touch form with validation
4. **Footer**

### 3. Gallery Page (`/gallery`)
**Sections in order:**
1. **Gallery Header** - With animated buttons/filters
2. **Event #1 Pictures** - Grid layout with hover effects
3. **Event #2 Pictures** - Grid layout with hover effects
4. **Footer**

### 4. Book Page (`/book`)
**Sections in order:**
1. **Service Selection** - Cards showing packages (Psalm & Platter, The Arkives, Package A, Package B)
2. **Date Selection** - Interactive calendar component
3. **Booking Overview** - Selected service and date summary
4. **Details Form** - Customer information and payment options
5. **Footer**

## Color Scheme
- **Primary**: Light blue/teal (#7DD3FC, #67E8F9)
- **Secondary**: Pink/Rose (#F8BBD9, #EC4899)
- **Accent**: Coral/Orange (#FB7185, #F97316)
- **Neutral**: Warm beige/cream backgrounds
- **Text**: Dark teal (#0F766E) for headings

## Component Guidelines

### Header Component
- Responsive navigation with hamburger menu on mobile
- Logo centered
- Navigation links: HOME, ABOUT US, GALLERY, BOOK
- Social media icons (Facebook, Instagram)
- Consistent across all pages

### Footer Component
- Three columns: Quick Links, Contact Us, Follow Us
- Social media links
- Contact information
- Copyright notice
- Responsive design

### Service Cards
- Consistent pricing format ($XXX)
- Image placeholders with hover effects
- Service name and description
- "Book Now" or action buttons
- Responsive grid layout

### Calendar Component
- Month navigation (October 2025, November 2025)
- Date selection functionality
- Highlighted available dates
- Disabled past dates
- Mobile-friendly touch interactions

### Form Components
- Input validation
- Error states
- Success feedback
- Accessible labels
- Responsive layout

## API Integration

### Service Functions (`services/`)
```javascript
// Example service structure
const API_BASE_URL = 'your-api-endpoint';

export const bookingService = {
  createBooking: (bookingData) => fetch(`${API_BASE_URL}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookingData)
  }),
  
  getAvailableDates: () => fetch(`${API_BASE_URL}/available-dates`),
  
  getPackages: () => fetch(`${API_BASE_URL}/packages`),
  
  submitContactForm: (formData) => fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
};
```

## Animation Guidelines

### GSAP Animations
- **Scroll Triggers**: Use for section reveals and image showcases
- **Timeline Animations**: For complex sequences
- **Stagger Effects**: For service cards and gallery items
- **Smooth Scrolling**: Implement site-wide smooth scroll

### Framer Motion
- **Page Transitions**: Between route changes
- **Hover Effects**: On buttons and cards
- **Modal Animations**: For booking confirmations
- **Form Interactions**: Input focus states

## Responsive Design

### Breakpoints (Tailwind)
- `sm`: 640px (Small tablets)
- `md`: 768px (Tablets)
- `lg`: 1024px (Small desktops)
- `xl`: 1280px (Large desktops)

### Mobile-First Approach
- Start with mobile design
- Progressive enhancement for larger screens
- Touch-friendly interactions
- Optimized images for different screen sizes

## State Management

### Context Structure
```javascript
// BookingContext for booking flow
const BookingContext = createContext();

// GlobalContext for app-wide state
const GlobalContext = createContext();
```

### State Categories
- **Booking State**: Selected package, date, customer details
- **UI State**: Loading states, modals, navigation
- **User State**: Contact form data, preferences

## Performance Considerations
- Lazy loading for images
- Code splitting for routes
- Optimized bundle size
- Efficient re-renders
- Image optimization

## Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

## Testing Strategy
- Component testing for UI elements
- Form validation testing
- API integration testing
- Responsive design testing
- Cross-browser compatibility

## Deployment Notes
- Environment variables for API endpoints
- Build optimization
- Error boundary implementation
- 404 page handling
- SEO meta tags

---

## Quick Start Checklist
1. Set up React Router with Outlet
2. Create base components (Header, Footer)
3. Implement responsive navigation
4. Build page layouts with sections
5. Add GSAP scroll animations
6. Integrate booking flow
7. Style with Tailwind + DaisyUI
8. Test responsive design
9. Optimize performance
10. Deploy and monitor