import { useState } from "react";

function ExpenseList({ expenses, onDeleteExpense,onClearAll }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredExpenses = expenses.filter((expense) => {
    const matchesCategory =
      selectedCategory === "All" ||
      expense.category === selectedCategory;

    const matchesSearch = expense.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="expense-list">
      <div className="list-header">
        <h2>Expenses</h2>
        {expenses.length > 0 && (
  <button
    className="clear-btn"
    onClick={onClearAll}
  >
    Clear All
  </button>
)}

        <div className="filters">
          <input
            type="text"
            placeholder="Search expenses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Entertainment">
              Entertainment
            </option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {filteredExpenses.length === 0 ? (
        <p className="no-expenses">No expenses found.</p>
      ) : (
        <div className="expense-items">
          {filteredExpenses.map((expense) => (
            <div className="expense-card" key={expense.id}>
              <div className="expense-info">
                <h3>{expense.title}</h3>

                <p className="category">
                  {expense.category}
                </p>
              </div>

              <div className="expense-right">
                <p className="amount">
                  ₹{expense.amount}
                </p>

                <button
  className="delete-btn"
  onClick={() => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${expense.title}"?`
    );

    if (confirmDelete) {
      onDeleteExpense(expense.id);
    }
  }}
>
  Delete
</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpenseList;