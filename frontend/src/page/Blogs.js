import { useEffect, useState } from "react"
import axios from "axios"
import Card from "../component/Card.js"

const Blog = () => {
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/web_blog/`).
    then((res) => {
      setBlogs(res.data)
    })
  },[]);

  if (!blogs){
    return(
      <h1>Loading data...</h1>
    )
  }

  return(
    <div className="blog-container">
      <span class="blog-title">All Blog</span>
      <hr />
      {
        blogs.map(blog => {
          return(<Card data={blog} />)
        })
      }
    </div>
  )  
}

export default Blog