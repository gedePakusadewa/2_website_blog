import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import FormBlog from '../component/FormBlog.js';
import axios from 'axios';

const ModalUpdate = ({
    setIsShowEditModal = () => {},
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
          <Modal.Title>Update Blog</Modal.Title>
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
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalUpdate