import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Expense Tracker</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/expenses">Expenses</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;