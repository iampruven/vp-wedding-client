import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <section className="centering">
      <div>
        <Link to="/">Home</Link>
        <Link to="/story">Our story</Link>
        <Link to="/rsvp">RSVP</Link>
      </div>
      <div>
        <h1>M & V Wedding</h1>
      </div>
    </section>
  );
}

export default Header;
