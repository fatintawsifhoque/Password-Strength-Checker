# 🔒 Password Strength Checker

A clean, responsive, and real-time Password Strength Checker built using **both Vue 3 and React**. 

Instead of just building it once, I implemented this exact same UI and validation logic in two different ecosystems. The goal was to deeply understand how each framework handles real-time state updates, memoization, and side effects under the hood.

---

### ✨ Features

- **Real-Time Validation:** Instantly checks password strength as the user types, providing immediate visual feedback.
- **Visual Strength Indicator:** Displays a color-coded status (Weak, Medium, Strong) directly inside the input field.
- **Detailed Requirement Checklist:** Shows a live checklist of password criteria (length, uppercase, lowercase, number, special character) with dynamic check (✓) and cross (✗) marks.
- **Optimized Performance:** Leverages framework-specific memoization techniques to ensure regex checks only re-evaluate when necessary.
- **Custom Tailwind UI:** Features a clean, modern design with smooth focus transitions and dynamic text coloring.

---

### 🛠️ Tech Stack

This repository is neatly divided into two independent implementations:

**1. Vue 3 Version (`/vue`)**
- **Framework:** Vue 3 (Composition API with `<script setup>`)
- **Key Concepts:** Uses `ref` for state, `computed` for efficient regex caching, and `watch` to evaluate the overall strength status.

**2. React Version (`/react`)**
- **Framework:** React 18+ (Functional Components)
- **Key Concepts:** Uses `useState` for state, `useMemo` for memoizing individual regex checks, and `useEffect` to trigger the strength evaluation.

**Shared:**
- 🎨 **Tailwind CSS** (Utility-first styling)

---

### 🚀 Live Demos & Source

Experience the real-time validation live. Both versions share the exact same design language and logic but are powered by different engines:

| Framework | Live Preview | Source Code |
| :--- | :--- | :--- |
| ⚡ **Vue 3** | [ View Vue Live Demo](https://password-strength-checker-vue-fth.vercel.app) | [`/vue`](#) |
| ⚛️ **React** | [🔗 View React Live Demo](https://password-strength-checker-react-fth.vercel.app/) | [`/react`](#) |

---