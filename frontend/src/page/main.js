import '../style.css';
import Button from 'react-bootstrap/Button';

export default function Main(){
  return(
    <>
      <header className="container-flex-space-between">
        <div className="logo-text">
          <span>WebBlog</span>
        </div>
        <div className="container-flex-space-between">
          <Button variant="primary">Home</Button>
          <Button variant="primary">New Blog</Button>
        </div>
      </header>
      <div>
        body
      </div>
      <footer>
        <h1>WebBlog</h1>
        © 2013 - 2024 www.web-blog.com - All Rights Reserved.
      </footer>
    </>
  )
}