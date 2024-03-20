import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styles from '../../../rework/CommentsPage.module.css'

const CommentsPage = () => {
  const { id } = useParams();
  const [ post, setPost ] = useState({})
  const [ data, setData ] = useState([])

  useEffect(() => {
    if(id){
      axios.get(`https://dummyjson.com/posts/${id}/comments`)
      .then(res => setData(res.data.comments))
    }
  },[])

  useEffect(() => {
    if(id){
      axios.get(`https://dummyjson.com/posts/${id}`)
      .then(res => setPost(res.data))
    }
  },[])

  return (
    <div className={styles.main}>
      <div className={styles.post}>
        <h2>{post?.title}</h2>
        <p>{post?.body}</p>
      </div>
      {data.map(el => 
      (<div key={el.id} className={styles.comment}>
        <b>Комментарий пользователя: {el.user.username}</b>
        <p>{el.body}</p>
      </div>)
        )}
    </div>
  )
}

export default CommentsPage