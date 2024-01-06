import { useEffect, useState } from "react"
import axios from "axios"
import Card from "../component/Card.js"
import GeneralConst from "../resource/General.js"
import BlogConst from "../resource/Blog.js"

const Blog = () => {
  const [blogs, setBlogs] = useState(null)
  const [isRefresh, setIsRefresh] = useState(false)
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/web_blog/`).
    then((res) => {
      setBlogs(res.data)
    })
  },[isRefresh]);

  if (!blogs){
    return(
      <h1>{GeneralConst.LOADING}</h1>
    )
  }

  return(
    <div className="blog-container">
      <span class="blog-title">{BlogConst.ALL_BLOG}</span>
      <hr />
      {
        blogs.map(blog => {
          return(
            <Card 
              data={blog}
              setIsRefresh={setIsRefresh}
            />)
        })
      }
    </div>
  )  
}

export default Blog