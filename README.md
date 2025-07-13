# 🛍️ Mini-Commerce — Frontend Assessment

**Mini-Commerce** is a client-side e-commerce prototype built with **Next.js 14 (App Router)**, showcasing a minimal shopping experience with persistent cart, mock checkout flow, and modern frontend architecture. Built specifically to demonstrate proficiency with React, Zustand, React Query, and Tailwind CSS.

## 🔍 Project Overview

This app simulates a tiny shop where users can:
- Browse a catalogue of 8+ dummy products 
- View product details and add to cart
- Manage the cart (quantity, remove items, view subtotal/total)
- Complete a mock checkout that generates a random order ID

All data is persisted using **localStorage**, ensuring full reload resilience — no backend required.

---

## 🎨 Design Approach

- **Layout**: Responsive flex/grid using Tailwind CSS. The catalogue uses a grid that adapts from single column (mobile) to 3 columns (desktop).
- **Styling**: A clean, modern aesthetic with soft shadows, rounded cards, and consistent spacing. Dark mode is optional.
- **Accessibility**:
  - Semantic HTML (`<button>`, `<nav>`, `<section>`, etc.)
  - Focus-visible states for keyboard navigation
  - `alt` tags on all product images

---

## ⚙️ Tools & Techniques

| Tool              | Purpose                                                  |
|-------------------|----------------------------------------------------------|
| **Next.js 14**     | App Router for routing, layout, SEO, image optimization |
| **React Query**   | Fetch catalogue, cache, and handle loading/errors       |
| **Zustand**       | Global cart state with localStorage persistence         |
| **Tailwind CSS**  | Utility-first styling with custom variants              |
| **TypeScript**    | Strict typing throughout (`strict: true`)               |
| **Jest + RTL**    | Unit testing (e.g., cart functionality)                 |
| **Prettier + ESLint** | Formatting and linting (no warnings/errors)         |

---

## 🧠 Strategy

- **Performance**:
  - Optimized images with `next/image`
  - Font loading strategy with `next/font`
  - Code-splitting via layouts and route-level loading

---

## 🛑 Error Handling Strategy

| Area               | Handling                                              |
|--------------------|-------------------------------------------------------|
| **Product Fetching** | `React Query` handles loading & error UI fallback    |
| **Cart Actions**    | Disable buttons on invalid state (e.g., 0 quantity)   |
| **LocalStorage Failures** | Try-catch with fallback and toast feedback     |

---

## ✅ Testing Summary

- Includes `cart.test.tsx` using **Jest + React Testing Library**
- Covers:
  - Empty cart state
  - Adding/removing items
  - Checkout redirect logic
- All tests and linter rules pass: `npm run test && npm run lint`

