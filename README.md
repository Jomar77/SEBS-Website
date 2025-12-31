# 🎉 Psalm & Platter - Event Planning Website

A modern, customer-facing React website for **Psalm & Platter**, an event planning business specializing in elegant grazing carts, interactive photobooths, matcha stations, and premium event experiences.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5-5A0EF8?style=flat-square&logo=daisyui)

## ✨ Features

### 🏠 Landing Page
- Animated hero section with floating background elements
- Business introduction and service overview
- Dynamic service cards with GSAP scroll animations
- Event gallery showcase
- Customer review integration
- Event package carousel

### 📅 Multi-Step Booking System
- **Service Selection**: Browse and select from available event services
- **Date Selection**: Interactive calendar with availability checking via FullCalendar
- **Details Form**: Complete booking with customer information
- **Booking Confirmation**: Success page with booking reference
- **Booking Management**: Look up and manage existing bookings

### 🖼️ Gallery
- Parallax carousel for featured event highlights
- Event-based gallery organization
- Latest event showcase with special styling
- Expandable event sections

### 📖 About Page
- Company introduction with animated sections
- Service showcase
- Contact form integration via EmailJS
- Event package information

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19 |
| **Build Tool** | Vite 6 |
| **Routing** | React Router DOM 7 |
| **Styling** | Tailwind CSS 4 + DaisyUI 5 |
| **Animations** | GSAP 3 with ScrollTrigger |
| **Calendar** | FullCalendar |
| **Icons** | Lucide React + React Icons |
| **Email** | EmailJS |
| **Analytics** | Vercel Analytics |
| **Deployment** | Vercel |

## 📁 Project Structure

```
src/
├── Components/
│   ├── About/              # About page sections
│   ├── Booking/            # Multi-step booking flow
│   │   ├── BookingForm/    # Customer details form
│   │   ├── BookingLookup/  # Booking search & management
│   │   ├── BookingRequest/ # Service, Date, Details steps
│   │   ├── CalendarSection/# Interactive date picker
│   │   └── ServiceSectionBooking/
│   ├── Common/             # Reusable components
│   │   ├── CircleIcon.jsx
│   │   ├── PolaroidCard.jsx
│   │   ├── WavePattern.jsx
│   │   └── EventPackageSection/
│   ├── Gallery/            # Gallery components
│   │   ├── CarouselGallery/
│   │   └── ShowcaseGallery/
│   ├── Header/             # Navigation
│   ├── Index/              # Landing page sections
│   │   ├── AnimatedBackground/
│   │   ├── BusinessSection/
│   │   ├── GallerySection/
│   │   ├── ReviewSection/
│   │   └── ServiceSection/
│   └── Footer.jsx
├── Context/
│   ├── BookingContext.jsx  # Booking state management
│   └── DataContext.jsx     # Global data provider
├── CSS/
│   ├── index.css          # Custom theme & fonts
│   └── calendar.css       # FullCalendar styling
├── Hooks/
│   ├── useHighlights.js   # Gallery highlights hook
│   └── useServices.js     # Services data hook
├── Routes/
│   ├── Index.jsx          # Landing page
│   ├── About.jsx          # About page
│   ├── Booking.jsx        # Booking wrapper
│   ├── Gallery.jsx        # Gallery page
│   ├── Root.jsx           # App layout
│   └── privacy-policy.jsx
├── Services/
│   └── serviceApi.js      # API service layer
├── Utils/
│   └── apiConfig.js       # API configuration
└── main.jsx               # App entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jomar77/SEBS-Website.git
   cd SEBS-Website/sebs-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the `sebs-website` directory:
   ```env
   VITE_SEBS_API_URL=your_backend_api_url
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Custom Theme - "eventplanner"

The website uses a warm, elegant color palette:

| Color | Hex | Usage |
|-------|-----|-------|
| Cream | `#fff8ee` | Base background |
| Light Pink | `#faf4eb` | Secondary background |
| Teal | `#8fc2c3` | Accent elements |
| Rose Pink | `#efaac3` | Primary buttons, highlights |
| Coral | `#ffba51` | Accent color |
| Dark Teal | `#204558` | Text, headings |

### Custom Fonts

- **Yeseva One** - Headings and display text
- **Corben** - Section titles
- **Montserrat Alternates** - Body text
- **Be Vietnam Pro** - UI elements

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌐 Deployment

This project is configured for deployment on **Vercel**.

1. Connect your GitHub repository to Vercel
2. Set the root directory to `sebs-website`
3. Add environment variable `VITE_SEBS_API_URL` in Vercel project settings
4. Deploy!

## 📱 Responsive Design

The website is fully responsive with breakpoints optimized for:
- Mobile devices (< 640px)
- Tablets (640px - 1024px)
- Desktop (> 1024px)

Special carousel mode is enabled for devices under 1024px width for better touch interaction.

## 🔌 API Integration

The frontend connects to a REST API backend for:
- Service listings
- Event galleries and highlights
- Booking requests and management
- Availability checking

All API endpoints are public and don't require authentication for frontend access.

## 📄 License

ISC License

## 👥 Authors

- **Jomar** - *Initial work* - [Jomar77](https://github.com/Jomar77)

---

<p align="center">
  Made with ❤️ for <strong>Psalm & Platter</strong>
</p>
