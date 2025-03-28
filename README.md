# Lushwood Haven App

## Frontend for Hotel Room Booking Platform  
The repository contains a frontend application for the online booking platform for the hotel **Lushwood Haven**.
It is a single-page application (SPA) developed using **React**, **TypeScript**, **Vite**, **Zustand**, **React Router**, and a number of animation and UI libraries.

---

## 📌 Table of Contents

- [🛠️ Application functionality](#application-functionality)
- [🧭 API Endpoints](#api-endpoints)
- [📁 Project structure](#project-structure)
- [🚀 Installation and launch](#installation-and-launch)
- [📦 Used Libraries](used-libraries)

---

## Application functionality

- ✅ User registration and login
- ✅ Getting the current user by token
- ✅ Viewing a list of all rooms
- ✅ Viewing detailed information about one room
- ✅ Booking a room
- ✅ Cancelling a booking
- ✅ Displaying old and new orders
- ✅ Notifications via react-toastify
- ✅ Responsive interface with animations and sliders

---

## API Endpoints

App Routes (Frontend)
Public Routes (No Authentication Required):
<br>**@ GET /**
<br>Landing page of the application. Contains a visually engaging homepage with general information about the hotel.

**@ GET /about**
<br>Page with information about the hotel, its history, values, and mission.

**@ GET /gallery**
<br>Photo gallery of rooms, events, and hotel surroundings.

Private Routes (Authentication Required):
<br>**@ GET /services**
<br>Page displaying all available room types grouped by categories (Standard, Family, Suite). Each room card contains a short description, price per night, image slider, and a button to view full details.

**@ GET /services/rooms/:roomNameId**
<br>Dynamic page showing detailed information about a specific room by its URL-friendly name. Includes full description, amenities (with icons), and images.

---

## Project structure

```bash
├── public/ # Static files
├── src/
│   ├── components/ # Reusable UI components
│   ├── data/ # Static or mock data
│   ├── hooks/ # Custom React hooks
│   ├── pages/ # Application pages/routes
│   ├── store/ # Zustand store for global state
│   ├── styles/ # Global styles
│   ├── types/ # Common TypeScript types and interfaces
│   ├── utils/ # Helper functions and utilities
│   ├── App.tsx # Main application component with routing
│   ├── Layout.tsx # Wrapper for pages: Header, Footer, ToastContainer
│   ├── PrivateRoute.tsx # HOC/Component for protecting private routes
│   ├── main.tsx # Entry point to the application, initializing React
├── .eslintrc.js # ESLint configuration for linting and auto-fixing code
├── index.html # HTML template in which the React application is mounted
├── vite.config.ts # Vite configuration for development and build
├── tsconfig.json # Main tsconfig for TypeScript
├── tsconfig.node.json # TypeScript configuration for node environment
├── vercel.json # Configuration for deployment on Vercel
├── package.json # Project dependencies, run/build commands, meta information
├── README.md # Project documentation
```

---

## Installation and launch
1. Clone the repository:
```bash
git clone https://github.com/333Nikita333/lushwood-haven.git
```
2. Go to the project directory:
```bash
cd lushwood-haven
```
3. To install dependencies use: `npm install` or `yarn install`
4. Create a .env file in the project root and add the necessary environment variables. Example:
```bash
VITE_API_URL=https://example.com
VITE_PORT=4000
```
5. To run the project in development mode, use the command: `npm run dev` or `yarn dev`

---

## Used Libraries
- @fancyapps/ui: Elegant lightbox/modal UI
- axios: For HTTP requests
- gsap: Powerful animation library
- howler: Audio playback in web apps
- locomotive-scroll: Smooth scroll and parallax effects
- modern-normalize: CSS normalization
- only-scrollbar: Hide native scrollbars
- picload: Lazy image loading
- react, react-dom: Core React libraries
- react-router-dom: Routing system
- react-icons: Icon set for React
- react-hook-form: Form management and validation
- react-photo-gallery: Gallery layout
- react-parallax, react-parallax-tilt: Parallax and tilt effects
- react-toastify: Toast notifications
- react-datepicker: Date selection for bookings
- react-scroll: Smooth scrolling to anchors
- react-imgr: Optimized image handling
- react-phone-input-2: International phone input
- styled-components: CSS-in-JS styling
- swiper: Sliders and carousels
- zustand: Lightweight state management
- @vitejs/plugin-react: Vite plugin for React
- vite: Next-gen build tool
- typescript: TypeScript language support
- eslint:plugins – Code linting
-  @types/*: Type definitions for TypeScript
