import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import "./ProductListPage.css";

const ProductListPage = () => {
  const groupedProducts = products.reduce((acc, product) => {
    (acc[product.category] = acc[product.category] || []).push(product);
    return acc;
  }, {});

  return (
    <div>
      <Header pageTitle="Plants" />
      <div className="product-list-container">
        {Object.entries(groupedProducts).map(([category, items]) => (
          <section key={category} className="product-category">
            <h2>{category} Plants</h2>
            <div className="product-grid">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
