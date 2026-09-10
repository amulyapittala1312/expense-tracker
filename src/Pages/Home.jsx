import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-tag">SMART MONEY MANAGEMENT</p>

          <h1>
            Take Control of
            <span> Your Expenses</span>
          </h1>

          <p className="hero-description">
            Track your daily spending, understand your habits,
            and manage your money with ease.
          </p>

          <Link to="/expenses" className="hero-btn">
            Manage Expenses →
          </Link>
        </div>

        <div className="hero-visual">
          <div className="money-card">
            <div className="wallet-icon">💰</div>
            <h2>Track Your Money</h2>
            <p>Spend wisely. Save better.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Everything You Need</h2>

        <p className="features-subtitle">
          Simple tools to keep your expenses organized.
        </p>

        <div className="features-container">

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Track Expenses</h3>
            <p>
              Add and manage your daily expenses
              quickly and easily.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Monitor Spending</h3>
            <p>
              See your total spending and understand
              where your money goes.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Search & Filter</h3>
            <p>
              Find specific expenses using search
              and category filters.
            </p>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="home-cta">
        <h2>Ready to manage your expenses?</h2>

        <p>
          Start tracking your spending today.
        </p>

        <Link to="/expenses" className="cta-btn">
          Get Started →
        </Link>
      </section>

    </div>
  );
}

export default Home;