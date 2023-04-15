import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {name: '', comment: '', List: []}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const classNameBg =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    if (name.length !== 0 && comment.length !== 0) {
      const newComment = {
        id: uuid(),
        name,
        comment,
        isLike: false,
        Date: new Date(),
        classNameBg,
      }
      this.setState(prevState => ({
        List: [...prevState.List, newComment],
        name: '',
        comment: '',
      }))
    } else {
      alert('Please enter the valid details')
    }
  }

  onLike = id => {
    this.setState(prevState => ({
      List: prevState.List.map(each => {
        if (each.id === id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }

  onDeleted = id => {
    const {List} = this.state
    const FilteredList = List.filter(eachItem => eachItem.id !== id)
    this.setState({List: FilteredList})
  }

  render() {
    const {name, comment, List} = this.state
    const lengthValue = List.length
    return (
      <div className="comments-container">
        <h1 className="comment-heading">Comments</h1>

        <div className="container">
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <p className="para">Say something about 4.0 Technologies</p>
            <input
              type="text"
              placeholder="Your name"
              className="input"
              onChange={this.onChangeName}
              value={name}
            />
            <textarea
              placeholder="Your Comment"
              rows="5"
              cols="40"
              className="input"
              onChange={this.onChangeComment}
              value={comment}
            />
            <button type="submit" className="button">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="img"
          />
        </div>
        <hr className="hr-line" />
        <div className="count-container">
          <p className="count">{lengthValue}</p>
          <p className="comment-para">comments</p>
        </div>
        <ul className="list-container">
          {List.map(eachItem => (
            <CommentItem
              eachItem={eachItem}
              key={eachItem.id}
              backgroundClassName={initialContainerBackgroundClassNames}
              onLike={this.onLike}
              onDelete={this.onDeleted}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
