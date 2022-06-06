import { Link } from "react-router-dom";

export const NotFound = () => (
    <div className="container">
      <h1>404 - Not Found!</h1>
      <Link to="/" className="link">Go Home</Link>
    </div>
  );