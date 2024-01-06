import { useEffect, useState } from "react"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const ModalDelete = ({
  setIsShowDeleteModal = () => {},
  setIsRefresh = () => {},
  titleData,
  idData
  }) => {
  const [isShow, setIsShow] = useState(true);

  const handleClose = () => {
    setIsShow(false)
    setIsShowDeleteModal(false)
    setIsRefresh(true)
  }

  const deleteBlog = () => {
    axios.delete(`http://127.0.0.1:8000/api/web_blog/${idData}`).
    then(res => {
      handleClose()
    })
  }

  return(
    <>
      <Modal show={isShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure delete this Blogs "{titleData.toUpperCase()}"?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteBlog}>
            Yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalDelete