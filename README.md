# Task Tracker 📝  

**Task Tracker v3** – a modern, minimalistic task management application built with **React and TypeScript**.

This is the third iteration of the project, refactored from a React + JavaScript codebase into a fully typed **React + TypeScript** application, improving type safety, maintainability, and overall code quality.

The app focuses on clean architecture, predictable state management, and scalable component design, while preserving a simple and intuitive user experience.

---

## 🚀 Features  

✅ Add new tasks with description, due date, and priority  
✏️ Mark tasks as done / undone  
🗑️ Delete single tasks  
🧹 Clear all tasks at once  
📊 Track total and completed task statistics  
↕️ Sort tasks by input order, finished status, priority, or date  
💾 Persistent storage using `localStorage`  

---

## 🛠️ Technologies Used  

- React (functional components, hooks)  
- TypeScript (strict typing, union types, event typing)  
- Vite (fast dev server & build tool)  
- CSS3 (Flexbox, custom styling)  
- DM Sans (Google Fonts)  
- LocalStorage (data persistence)  

---

## 🧠 Key Technical Highlights  

- Fully typed React components and props  
- Typed event handlers (`ChangeEvent`, `FormEvent`)  
- Union types for task priority and sorting logic  
- Immutable state updates  
- Safe handling of persisted data from `localStorage`  
- Clean separation of concerns between components  

---

## 💡 Possible Improvements  

- Edit existing tasks  
- Search & filter tasks  
- Dark mode toggle  
- Task categories or tags  
- Drag-and-drop task reordering  
- Unit tests (Vitest / React Testing Library)  

---

## 📦 Getting Started  

To run the project locally:

1. Clone the repository:
```bash
git clone https://github.com/your-username/ts-task-tracker.git
```

2. Navigate to the project directory:
```bash
cd ts-task-tracker
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```
The app will be available at:
```bash
http://localhost:5173/
```

🌐 Live Demo

https://maciej-galuszka.github.io/ts-task-tracker/
