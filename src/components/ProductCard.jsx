import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isAdded = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      {product.onSale && <span className="sale-badge">SALE</span>}
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
      <button
        onClick={handleAddToCart}
        disabled={isAdded}
        className={`add-to-cart-btn ${isAdded ? "added" : ""}`}
      >
        {isAdded ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
