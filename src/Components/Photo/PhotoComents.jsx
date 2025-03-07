import React from 'react'
import { UserContext } from '../../UserContext'
import PhotoComentsForms from './PhotoComentsForms'
import styles from './PhotoComents.module.css'

const PhotoComents = (props) => {
  const [comments, setComments] = React.useState(() => props.comments)
  const {login} = React.useContext(UserContext)

  return (
    <>
      <ul className={styles.comments}>
        {comments.map(comment => <li key={comment.comment_ID }>
          <b>{comment.comment_author}:</b>
          <span>{comment.comment_content}</span>

        </li>)}
      </ul>
      {login && <PhotoComentsForms id={props.id} setComments={setComments}/>}
    </>
  )
}

export default PhotoComents
