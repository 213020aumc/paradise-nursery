import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import "./CartPage.css";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Header pageTitle="Plants" />
      <div className="cart-page-container">
        <div className="cart-content">
          <h2 className="cart-total-amount">Total Cart Amount: ${totalCost}</h2>

          {cartItems.length > 0 && (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-unit-price">${item.price}</span>
                    <div className="quantity-controls">
                      <button onClick={() => dispatch(decrementQuantity(item))}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(incrementQuantity(item))}>
                        +
                      </button>
                    </div>
                    <span className="cart-item-subtotal">
                      Total: ${item.price * item.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(removeFromCart(item))}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="cart-actions">
          <Link
            to="/products"
            className="cart-action-btn continue-shopping-btn"
          >
            Continue Shopping
          </Link>
          <button className="cart-action-btn checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
