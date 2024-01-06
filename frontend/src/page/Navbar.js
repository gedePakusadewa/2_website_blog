import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "../style.css";
import BlogConst from "../resource/Blog.js"

function Navbar() {
  return(
    <div className="container-flex-space-between">
      <div className="logo-text">
        <span>{BlogConst.TITLE}</span>
      </div>
      <nav>
        <Link to="/">
          <Button variant="primary">{BlogConst.MENU_HOME}</Button>
        </Link>
        <Link to="/newblog">
          <Button variant="primary">{BlogConst.MENU_NEW_BLOG}</Button>
        </Link>
        <Link to="/blogs">
          <Button variant="primary">{BlogConst.MENU_BLOGS}</Button>
        </Link>
      </nav>
    </div>
  )
};

export default Navbar;