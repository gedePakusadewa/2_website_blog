import { useState } from 'react';
import FormBlog from '../component/FormBlog';
import axios from 'axios';
import "../style.css";

export default function NewBlog(){
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("")
  const [isClearForm, setIsClearForm] = useState(false)

  const submit = () =>{
    axios.post(`http://127.0.0.1:8000/api/web_blog/`, {
      title,
      content,
      author
    }).then(res =>{
      setIsClearForm(true)
    })
  }

  return (
    <div>
      <FormBlog
        isCreate={true}
        isClearForm={isClearForm}
        setTitle={setTitle}
        setContent={setContent}
        setAuthor={setAuthor}
        submit={submit}
      />
    </div>
  )
}