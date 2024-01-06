import { useState } from "react"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FormBlog from '../component/FormBlog.js';
import axios from 'axios';
import GeneralConst from "../resource/General.js"
import BlogConst from "../resource/Blog.js"

const ModalUpdate = ({
    setIsShowEditModal = () => {},
    setIsRefresh = () => {},
    titleData,
    contentData,
    authorData,
    idData
  }) => {
  const [isShow, setIsShow] = useState(true);
  const [title, setTitle] = useState(titleData)
  const [content, setContent] = useState(contentData)
  const [author, setAuthor] = useState(authorData)
  const [isClearForm, setIsClearForm] = useState(false)

  const handleClose = () => {
    setIsShow(false)
    setIsShowEditModal(false)
    setIsRefresh(true)
  };

  const submit = () =>{
    axios.patch(`http://127.0.0.1:8000/api/web_blog/${idData}`, {
      title,
      content,
      author
    }).then(res =>{
      setIsClearForm(true)
      handleClose()
    })
  }

  return(
    <>
      <Modal show={isShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{BlogConst.UPDATE_BLOG}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormBlog
            isCreate={false}
            isClearForm={isClearForm}
            setTitle={setTitle}
            setContent={setContent}
            setAuthor={setAuthor}
            submit={submit}
            title={title}
            content={content}
            author={author}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {GeneralConst.CLOSE}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalUpdate