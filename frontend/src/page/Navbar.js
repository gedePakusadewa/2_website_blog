import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "../style.css";

function Navbar() {
  return(
    <div className="container-flex-space-between">
      <div className="logo-text">
        <span>WebBlog</span>
      </div>
      <nav>
        <Link to="/">
          <Button variant="primary">Home</Button>
        </Link>
        <Link to="/newblog">
          <Button variant="primary">New Blog</Button>
        </Link>
        <Link to="/blogs">
          <Button variant="primary">Blogs</Button>
        </Link>
      </nav>
    </div>
  )
};

export default Navbar;