import { useState, useEffect } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

function Expenses() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");

    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(
      expenses.filter((expense) => expense.id !== id)
    );
  };

  const totalExpenses = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );

  const clearAllExpenses = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to delete all expenses?"
    );

    if (confirmClear) {
      setExpenses([]);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Manage Your Expenses</h1>

<p className="subtitle">
  Add, track, and manage your daily spending
</p>

        <div className="summary-card">
          <div>
            <p>Total Expenses</p>
            <h2>₹{totalExpenses}</h2>
          </div>

          <div>
            <p>Number of Expenses</p>
            <h2>{expenses.length}</h2>
          </div>
        </div>

        <ExpenseForm onAddExpense={addExpense} />

        <ExpenseList
          expenses={expenses}
          onDeleteExpense={deleteExpense}
          onClearAll={clearAllExpenses}
        />
      </div>
    </div>
  );
}

export default Expenses;