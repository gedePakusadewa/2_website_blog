import "../style.css"
import Button from 'react-bootstrap/Button';

export default function NewBlog(){
  return (
    <div>
      <div className="newBlog-section">
        <div className="newBlog-title">Add a new blog</div>
        <label for="title">Title:</label><br />
        <input type="text" /><br />
        <label for="content">Content:</label><br />
        <textarea></textarea><br />
        <label for="author">Author:</label><br />
        <input type="text" /><br />
        <div className="container-btn-add"><Button className="btn-add">Add Blog</Button></div>
      </div>
    </div>
  )
}