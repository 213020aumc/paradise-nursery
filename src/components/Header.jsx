import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../public/logo.png";
import "./Header.css";

const Header = ({ pageTitle }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="main-header">
      <div className="navbar">
        <Link to="/" className="brand-section">
          <img src={logo} alt="Paradise Nursery Logo" className="logo" />
          <div>
            <h1 className="brand-name">Paradise Nursery</h1>
            <p className="tagline">Where Green Meets Serenity</p>
          </div>
        </Link>
        <Link to="/cart" className="cart-icon-container">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{totalItems}</span>
        </Link>
      </div>
      <div className="page-title-bar">
        <h2>{pageTitle}</h2>
      </div>
    </header>
  );
};

export default Header;
