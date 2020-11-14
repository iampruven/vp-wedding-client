import { Link } from "react-router-dom";
import './Header.css'
function Header() {
  return (
    <section className="centering">
      <Link to="/">Home</Link>
      <Link to="/rsvp">RSVP</Link>
    </section>
  );
}

export default Header;