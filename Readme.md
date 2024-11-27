# Family Expense Insight Platform

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Folder Structure](#folder-structure)
- [Pages and Components](#pages-and-components)
- [API Endpoints](#api-endpoints)
- [Running the Application](#running-the-application)
- [Conclusion](#conclusion)

## Project Overview

The **Family Expense Insight Platform** is a web application designed to help families manage and track their expenses. Users can add, view, edit, and delete expenses, categorize them, and visualize spending patterns with insightful charts. The platform provides a user-friendly interface to handle household finances efficiently and ensures all family members can access real-time expense data.

## Technologies Used

- **Frontend:** React, Bootstrap, React Router
- **Backend:** Node.js, Express, MongoDB
- **Database:** MongoDB (for storing expenses and user data)
- **Other Libraries:** dotenv, cors, exceljs

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/family-expense-insight.git
   cd family-expense-insight
   ```

2. **Install dependencies :**
    - ***For the frontend :***
        ```bash
        cd frontend
        npm install
        ```
    - ***For the backend :***
        ```bash
        cd backend
        npm install
        ```

3. **Create a `.env` file in the `backend` directory and set up your environment variables:**

    ```bash
    MONGO_URI=your_mongo_db_connection_string
    PORT=7000
    ```
4. **Ensure MongoDB is running** and the environment variables are correctly set up in your `.env` file.


## Folder Structure

```bash
    family-expense-insight/
├── backend/
│   ├── controllers/        # Contains logic for handling requests
│   ├── models/             # MongoDB models (Expense, User)
│   ├── routes/             # Defines API endpoints
│   ├── server.js           # Main server file
│   ├── .env                # Environment variables
│   └── package.json        # Backend dependencies
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/     # React components (ExpenseList, AddExpense, etc.)
│   │   ├── api/            # API calls (fetchExpenses, addExpense, etc.)
│   │   ├── App.js          # Main app file
│   │   └── index.js        # Entry point of the React app
│   └── package.json        # Frontend dependencies
└── README.md
```


## Pages and Components
- **ExpenseList Component:**

    - Displays a list of all expenses categorized by type.
    - Allows users to edit or delete expenses.
- **AddExpense Component:**

    - Form for adding new expenses.
    - Categorizes and validates expense data.
- **ExpenseDashboard Component:**

    - Visualizes expenses through charts (e.g., pie, bar).
    - Provides insights into spending patterns.
- **Navbar Component:**

    - Contains navigation links and user authentication (if required).


## API Endpoints
**The following API endpoints are available:**

- GET `/api/expenses:` Fetch all expenses.
- POST `/api/expenses:` Add a new expense.
- GET `/api/transaction:` Fetch all transactions
- POST `/api/trasaction:` Ass a new transaction

## Running the Application
1.  **Start the backend server:**
    ```bash
    cd backend
    node server.js
    ```
2.  **Start the Frontend server:**
    ```bash
    cd frontend
    npm start
    ```
3.  **Open your browser and navigate** to `http://localhost:3000` to view the application.


## Conclusion
The Family Expense Insight Platform helps families manage their household finances effectively by providing real-time expense tracking and visual insights. The simple interface and robust features ensure a seamless experience for monitoring and controlling family budgets. Feel free to contribute or share suggestions to enhance the platform further!
