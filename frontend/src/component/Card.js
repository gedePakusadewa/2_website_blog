import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import ModalUpdate from "../component/ModalUpdate.js"

const Card = (data) => {
  const [isShowEditModal, setIsShowEditModal] = useState(false)

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

  const showEditModal = () =>{
    setIsShowEditModal(true)
  }

  return(
    <div className="card-container">
      <div>
        <p className="card-title">{data.data.title}</p>
        <p className="card-content">{ displayText(data.data.content) }</p>
        <p className="card-time">
          { displayDate(data.data.updatedAt) }
          <br />
          <Button 
            className='card-btn-edit'
            onClick={() => { setIsShowEditModal(true) }}
            variant="success"
            size="sm"
          >
            <FontAwesomeIcon icon="fa-solid fa-file-pen" />{" "}
            Edit
          </Button>
        </p>
      </div>
      <div>
        <p>{authorCard(data.data.author)}</p>
      </div>
      {isShowEditModal && (
        <ModalUpdate 
          setIsShowEditModal={setIsShowEditModal}
          titleData={data.data.title}
          contentData={data.data.content}
          authorData={data.data.author}
          idData={data.data.id}
        />
      )}
    </div>
  )
}

export default Card