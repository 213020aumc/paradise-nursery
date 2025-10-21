import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="landing-left">
          <h1 className="landing-title">
            Welcome To
            <br />
            Paradise Nursery
          </h1>
          <p className="landing-tagline">Where Green Meets Serenity</p>
          <Link to="/products" className="get-started-btn">
            Get Started
          </Link>
        </div>
        <div className="landing-right">
          <p>Welcome to Paradise Nursery, where green meets serenity!</p>
          <p>
            At Paradise Nursery, we are passionate about bringing nature closer
            to you. Our mission is to provide a wide range of high-quality
            plants that not only enhance the beauty of your surroundings but
            also contribute to a healthier and more sustainable lifestyle. From
            air-purifying plants to aromatic fragrant ones, we have something
            for every plant enthusiast.
          </p>
          <p>
            Join us in our mission to create a greener, healthier world. Visit
            Paradise Nursery today and experience the beauty of nature at your
            doorstep.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
