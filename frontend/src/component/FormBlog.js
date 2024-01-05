import Button from 'react-bootstrap/Button';
import { useState } from "react"

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
    const addNewText = "Add a new blog";
    const addNewSubmitText = "Add Blog";
    const updateNewText = "Change blog";
    const updateNewSubmitText = "Update";

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
        {isCreate ? addNewText : updateNewText}
      </div>
      <label htmlFor="title">Title:</label><br />
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
      <label htmlFor="content">Content:</label><br />
      <textarea
        value={contentForm}
        onChange={
          (e)=>{
            setContent(e.target.value)
            setContentForm(e.target.value)
          }
        }
      ></textarea><br />
      <label htmlFor="author">Author:</label><br />
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
          {isCreate ? addNewSubmitText : updateNewSubmitText}
        </Button>
      </div>
    </div>
  )
}

export default FormBlog