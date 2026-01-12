# 🎓 Classroom Management System

### CreedTech React Assignment 2

A modern, responsive student management dashboard built with **React** and **Tailwind CSS v4.0**. This application allows users to manage student enrollment and monitor active session time with a clean, themeable interface.

---

## 🚀 Features

- **Student Enrollment:** Add students to the registry via a responsive form.
- **Real-time Stats:** Automatic tracking of total student count.
- **Active Session Timer:** A global timer that tracks management duration in seconds.
- **Dual Theme Support:** Full support for **Dark Mode** and **Light Mode** with smooth CSS transitions.
- **Responsive Layout:** A grid-based system that adapts from mobile (single column) to desktop (multi-column).
- **Modern UI:** Features Glassmorphism effects, backdrop blurs, and accessible components.

---

## 🛠️ Technical Implementation

### 1. Global State Management (Context API)

I implemented a centralized state management system to ensure data consistency:

- **`AppProvider`**: A higher-order component that wraps the application and provides global states (students, theme, timer, and name).
- **`useApp` Hook**: A custom hook created to provide a clean API for accessing state variables and setter functions anywhere in the code.
- **Performance**: Integrated `useMemo` for the context value to minimize unnecessary re-renders.

### 2. Refs & Focus Management

- I used `useRef` within the context to manage the student name input. This allows "Action" buttons (like the one in the Header) to programmatically focus the form input from distant parts of the component tree.

### 3. Styling & Dark Mode

- Built with the latest **Tailwind CSS v4.0** engine.
- **Theme Sync**: Used a `useEffect` hook to synchronize the application's theme state with the `document.documentElement` class list.
- **CSS Layers**: Utilized `@layer base` to handle global resets, ensuring Tailwind utility classes always take precedence.

---

## 📦 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/CodeHumps001/Classroom-management-system.git
   ```
