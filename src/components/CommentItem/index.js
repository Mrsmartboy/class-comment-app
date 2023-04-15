import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {eachItem, onLike, onDelete} = props
  const {id, name, comment, isLike, Date, classNameBg} = eachItem

  const firstLetter = name.slice(0, 1).toUpperCase()
  const time = formatDistanceToNow(Date)

  const onClickLike = () => {
    onLike(id)
  }

  const imgUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const LikeClassName = isLike && 'like-class'

  const onDeleteButton = () => {
    onDelete(id)
  }

  return (
    <li className="item-container">
      <div className="comment-item">
        <p className={` ${classNameBg} first-name`}>{firstLetter}</p>
        <p className="name">{name}</p>
        <p className="time">{time} ago</p>
      </div>
      <p className="description">{comment}</p>
      <div className="bottom-container">
        <div className="button-container">
          <button type="button" className="like-button" onClick={onClickLike}>
            <img src={imgUrl} alt="like" className="like-img" />

            <p className={` ${LikeClassName} like`}>Like</p>
          </button>
        </div>
        <button
          type="button"
          className="delete-button"
          onClick={onDeleteButton}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
      <hr className="hr-line" />
    </li>
  )
}

export default CommentItem
