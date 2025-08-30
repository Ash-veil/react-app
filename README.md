# 📊 React Dashboard Demo

A lightweight demo dashboard built with **React + Bootstrap 5**, featuring authentication, customer management, expenses, revenues, and reports.

---

## 🚀 Features

- 🔑 **Authentication System**
  - Register / Login / Logout flow
  - Protected & public routes
  - User context persistence

- 👥 **Customer Management**
  - `/customers` → Paginated list of customers
  - `/customer/:id` → Individual customer view

- 💸 **Expenses & Revenues**
  - `/expenses` → Track expenses by category, date, payment method
  - `/revenues` → Revenue tracking with date & amount
  - `/reports` → Charts for expenses & revenue trends (Chart.js)

- 🧭 **Navigation & Layout**
  - Sidebar with links
  - Breadcrumbs for sub-pages
  - 404 page for unknown routes
  - coming-soon page for upcoming features

---

## 🖼️ Screenshots (Demo Pages)
 
- `/register` → Register new users  
- `/dashboard` → Landing page after login  
- `/customers` → Paginated customer list  
- `/customer/:id` → Single customer view  
- `/expenses` → Expense tracking with charts  
- `/revenues` → Revenue tracking with charts  
- `/reports` → Combined reports with interactive graphs  
- `*` → Custom 404 page  

---

## 🛠️ Tech Stack

- **React** (Frontend framework)  
- **React Router v6** (Routing)  
- **Bootstrap 5** (UI components)  
- **Chart.js + react-chartjs-2** (Charts & graphs)  

---

## 📦 Installation

```bash
git clone <repo-url>
cd project-folder
npm install
npm start
```

Runs locally on: [http://localhost:3000](http://localhost:3000)

---

## 🌍 Deployment

Can be deployed on:  
- **Vercel** → [https://react-dashboard-app-opal.vercel.app](https://react-dashboard-app-opal.vercel.app)  

---

## 📌 Notes

This project is **frontend-only**.  
Fake/mock data is used for customers, expenses, and revenues.  

