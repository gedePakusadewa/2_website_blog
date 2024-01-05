import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import "../style.css";

export default function NewBlog(){
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("")

  const submit = () =>{
    axios.post(`http://127.0.0.1:8000/api/web_blog/`, {
      title,
      content,
      author
    })
  }

  return (
    <div>
      <div className="newBlog-section">
        <div className="newBlog-title">Add a new blog</div>
        <label htmlFor="title">Title:</label><br />
        <input 
          type="text"
          onChange={(e)=>{setTitle(e.target.value)}}
        /><br />
        <label htmlFor="content">Content:</label><br />
        <textarea
          onChange={(e)=>{setContent(e.target.value)}}
        ></textarea><br />
        <label htmlFor="author">Author:</label><br />
        <input
          type="text"
          onChange={(e)=>{setAuthor(e.target.value)}}
        /><br />
        <div className="container-btn-add">
          <Button 
            className="btn-add"
            onClick={()=>{submit()}}
          >
            Add Blog
          </Button>
        </div>
      </div>
    </div>
  )
}