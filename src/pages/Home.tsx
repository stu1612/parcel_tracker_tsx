// npm
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div className="welcome">
      <div className="welcome__image"></div>
      <div className="welcome__content">
        <h1 className="heading-1">Welcome to ParcelTracker</h1>
        <h2 className="heading-2">
          Track your parcel from the comfort of any device
        </h2>
        <div className="buttons">
          <button className="home-btn">
            <Link to="/packages" className="home-btn__link">
              <Icon icon="ant-design:google-plus-circle-filled" height={20} />
              <span>Login with Google</span>
            </Link>
          </button>
          <p className="text-light">
            Don't have an account? <span className="text-bold">Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
}
