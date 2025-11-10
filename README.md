# Personal Finance Tracker 
# Personal Finance Tracker

A web application to track personal income, expenses, and budget.

## Live Demo

Check out the live project here: [Personal Finance Tracker](https://personal-finance-tracker-mwlc.vercel.app/)


A modern, responsive **Personal Finance Tracker** built with **React.js**, **Tailwind CSS**, and **Framer Motion**.  
It allows users to record, manage, and visualize income and expenses with interactive charts, persistent local data storage, and CSV export functionality.



## Features

### 🧾 Transaction Management
- Add, edit, and delete **income** and **expense** transactions  
- Include details such as **amount**, **date**, **category**, and **notes**  
- Sort and filter transactions by **date**, **amount**, or **type**

### 🏷️ Category Management
- Manage custom categories for income and expenses  
- Preloaded categories (Food, Rent, Bills, Salary, etc.)  
- Add new custom categories anytime

### 📊 Data Visualization
- Interactive charts displaying:
  - **Income vs Expense comparison** (Bar chart)
  - **Expense breakdown by category** (Pie chart)
- Powered by **Recharts**

### Persistent Data
- All data stored locally in **browser LocalStorage**
- Automatically saved and restored across sessions

### 📤 CSV Export
- Export all transactions as a `.csv` file using **PapaParse**
- Ideal for sharing or backup

### 🧭 Responsive UI
- Optimized for all screen sizes — desktop, tablet, and mobile  
- Smooth scroll and clean minimalist interface with Tailwind CSS  

### 🎞️ Animations
- Smooth transitions and motion effects using **Framer Motion**
- Interactive hover and entry animations

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React.js** | Frontend framework |
| **Tailwind CSS** | Styling & responsive design |
| **Framer Motion** | Animations |
| **Recharts** | Data visualization |
| **React Icons** | Icon set |
| **PapaParse** | CSV export |
| **LocalStorage** | Persistent client-side storage |



## 📂 Project Structure

personal-finance-tracker/
│
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── TransactionForm.jsx
│ │ ├── TransactionList.jsx
│ │ ├── CategoryFilter.jsx
│ │ └── SummaryCharts.jsx
│ │
│ ├── pages/
│ │ └── Dashboard.jsx
│ │
│ ├── utils/
│ │ ├── storage.js
│ │ └── exportCSV.js
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── package.json
├── tailwind.config.js
└── README.md





## ⚙️ Installation & Setup

### 1. Clone the Repository

git clone https://github.com/yourusername/personal-finance-tracker.git
cd personal-finance-tracker

npm install
npm run build


| File                  | Description                              |
| --------------------- | ---------------------------------------- |
| `Dashboard.jsx`       | Integrates all app features and layout   |
| `TransactionForm.jsx` | Handles new income/expense input         |
| `TransactionList.jsx` | Displays and filters transaction history |
| `SummaryCharts.jsx`   | Shows charts with Recharts               |
| `exportCSV.js`        | Handles CSV file download                |
| `storage.js`          | Simplifies LocalStorage handling         |


[Personal Finance Tracker Screenshot](./screenshot.png)




