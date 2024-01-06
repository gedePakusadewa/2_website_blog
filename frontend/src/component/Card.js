import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import ModalUpdate from "../component/ModalUpdate.js"
import ModalDelete from "../component/ModalDelete.js"
import GeneralConst from "../resource/General.js"

const Card = ({
    data,
    setIsRefresh = () => {}
  }) => {
  const [isShowEditModal, setIsShowEditModal] = useState(false)
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)

  const authorCard = (name) => {
    return(
      <div className='card-author-container'>
        <FontAwesomeIcon icon="fa-solid fa-user" size="2x" />
        <br />
        <span>{name}</span>
      </div>
    )
  }

  const displayText = (text) => {
    if (text.length <= 100) return text;

    var tempText = text.slice(0,199)

    return tempText + "..."
  }

  const displayDate = (date) => {
    var d = new Date(date)

    return d.toDateString() + " , " + d.getHours() + ":" + d.getMinutes();
  }

  return(
    <div className="card-container">
      <div>
        <p className="card-title">{data.title}</p>
        <p className="card-content">{ displayText(data.content) }</p>
        <p className="card-time">
          { displayDate(data.updatedAt) }
          <br />
          <Button 
            className='card-btn-edit'
            onClick={() => { setIsShowEditModal(true) }}
            variant="success"
            size="sm"
          >
            <FontAwesomeIcon icon="fa-solid fa-file-pen" />{" "}
            {GeneralConst.EDIT_BUTTON}
          </Button>{" "}
          <Button 
            className='card-btn-edit'
            onClick={() => { setIsShowDeleteModal(true) }}
            variant="danger"
            size="sm"
          >
            <FontAwesomeIcon icon="fa-solid fa-trash" />{" "}
            {GeneralConst.DELETE_BUTTON}
          </Button>
        </p>
      </div>
      <div>
        <p>{authorCard(data.author)}</p>
      </div>
      {isShowEditModal && (
        <ModalUpdate 
          setIsShowEditModal={setIsShowEditModal}
          setIsRefresh={setIsRefresh}
          titleData={data.title}
          contentData={data.content}
          authorData={data.author}
          idData={data.id}
        />
      )}

      {isShowDeleteModal && (
        <ModalDelete
          setIsShowDeleteModal={setIsShowDeleteModal}
          setIsRefresh={setIsRefresh}
          titleData={data.title}
          idData={data.id}
        />
      )}
    </div>
  )
}

export default Card