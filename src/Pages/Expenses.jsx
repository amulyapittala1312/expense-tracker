import { useState, useEffect } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

function Expenses() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    

    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });
  const [editingExpense, setEditingExpense] = useState(null);

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
  const editExpense = (expense) => {
  setEditingExpense(expense);
};
const updateExpense = (updatedExpense) => {
  setExpenses(
    expenses.map((expense) =>
      expense.id === updatedExpense.id
        ? updatedExpense
        : expense
    )
  );

  setEditingExpense(null);
};
const cancelEdit = () => {
  setEditingExpense(null);
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
        <div className="page-heading">
  <p className="page-tag">EXPENSE MANAGEMENT</p>

  <h1>Manage Your Expenses</h1>

  <p className="subtitle">
    Keep track of your spending and stay in control of your money.
  </p>
</div>

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

        <ExpenseForm onAddExpense={addExpense}
        editingExpense={editingExpense}
        onUpdateExpense={updateExpense}
        onCancelEdit={cancelEdit}
         />

        <ExpenseList
          expenses={expenses}
          onDeleteExpense={deleteExpense}
          onClearAll={clearAllExpenses}
          onEditExpense={editExpense}
        />
      </div>
    </div>
  );
}

export default Expenses;