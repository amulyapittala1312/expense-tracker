import {useEffect, useState } from "react";

function ExpenseForm({ onAddExpense ,editingExpense,onUpdateExpense,onCancelEdit,}) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
  if (editingExpense) {
    setTitle(editingExpense.title);
    setAmount(editingExpense.amount);
    setCategory(editingExpense.category);
  }
}, [editingExpense]);

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!title || !amount || !category) {
    alert("Please fill all fields");
    return;
  }

  if (editingExpense) {
    const updatedExpense = {
      ...editingExpense,
      title,
      amount,
      category,
    };

    onUpdateExpense(updatedExpense);

setTitle("");
setAmount("");
setCategory("");

return;
  }

  const newExpense = {
    id: Date.now(),
    title,
    amount,
    category,
  };

  onAddExpense(newExpense);

  setTitle("");
  setAmount("");
  setCategory("");
};

  return (
    <div className="expense-form">
      <h2>Add Expense</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Expense title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>

        <div className="form-buttons">
  <button type="submit">
    {editingExpense ? "Update Expense" : "Add Expense"}
  </button>

  {editingExpense && (
    <button
      type="button"
      className="cancel-btn"
      onClick={() => {
        setTitle("");
        setAmount("");
        setCategory("");
        onUpdateExpense(null);
      }}
    >
      Cancel
    </button>
  )}
</div>
      </form>
    </div>
  );
}

export default ExpenseForm;