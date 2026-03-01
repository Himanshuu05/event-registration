import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg px-3">
      <Link className="navbar-brand" to="/">Event System</Link>
      <div>
        <Link className="btn btn-outline-light me-2" to="/">Users</Link>
        <Link className="btn btn-outline-light me-2" to="/events">Events</Link>
        <Link className="btn btn-outline-light" to="/registrations">Registrations</Link>
      </div>
    </nav>
  );
}

export default Navbar;