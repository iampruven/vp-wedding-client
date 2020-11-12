import { Link } from "react-router-dom";

function Header() {
  return (
    <section>
      <Link to="/">Home</Link>
      <Link to="/rsvp">RSVP</Link>
    </section>
  );
}

export default Header;