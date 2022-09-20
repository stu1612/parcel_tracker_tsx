// npm
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="welcome">
      <div className="image">
        <img src="" alt="" />
      </div>
      <div className="content">
        <h1>Welcome to ParcelTracker</h1>
        <h2>Track your parcel from the comfort of any device</h2>
        <div className="buttons">
          <button>
            <Link to="/packages">
              <img src="" alt="" /> <span>Login with Google</span>
            </Link>
          </button>
          <p>
            Don't have an account? <span>Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
}
