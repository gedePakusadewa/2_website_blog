import { useState } from "react";
import Button from 'react-bootstrap/Button';
import BlogConst from "../resource/Blog.js";

const FormBlog = ({
    isCreate,
    isClearForm,
    setTitle = () => {},
    setContent = () => {},
    setAuthor = () => {},
    submit = () => {},
    title="",
    content="",
    author=""
  }) => {
    const [titleForm, setTitleForm] = useState(title);
    const [contentForm, setContentForm] = useState(content);
    const [authorForm, setAuthorForm] = useState(author);
    const [isClearedForm, setIsClearedForm] = useState(false)

    function clearForm (){
      setTitleForm("")
      setContentForm("")
      setAuthorForm("")

      setIsClearedForm(true)
    }

    if(isClearForm && !isClearedForm){ clearForm() }

  return(
    <div className="newBlog-section">
      <div 
        className="newBlog-title"
      >
        {isCreate ? BlogConst.ADD_NEW : BlogConst.UPDATE_NEW}
      </div>
      <label htmlFor="title">{BlogConst.INPUT_TITLE}</label><br />
      <input 
        type="text"
        value={titleForm}
        onChange={
          (e)=>{
            setTitle(e.target.value)
            setTitleForm(e.target.value)
          }
        }
      /><br />
      <label htmlFor="content">{BlogConst.INPUT_CONTENT}</label><br />
      <textarea
        value={contentForm}
        onChange={
          (e)=>{
            setContent(e.target.value)
            setContentForm(e.target.value)
          }
        }
      ></textarea><br />
      <label htmlFor="author">{BlogConst.INPUT_AUTHOR}</label><br />
      <input
        type="text"
        value={authorForm}
        onChange={
          (e)=>{
            setAuthor(e.target.value)
            setAuthorForm(e.target.value)
          }
        }
      /><br />
      <div className="container-btn-add">
        <Button 
          className="btn-add"
          onClick={()=>{submit()}}
        >
          {isCreate ?
            BlogConst.ADD_NEW_BUTTON :
            BlogConst.UPDATE_NEW_BUTTON}
        </Button>
      </div>
    </div>
  )
}

export default FormBlog