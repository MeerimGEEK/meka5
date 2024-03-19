import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styles from './CommentsPage.module.css'

const CommentsPage = () => {
  const { id } = useParams();
  const [ data, setData ] = useState([])

  useEffect(() => {
    if(id){
      axios.get(`https://dummyjson.com/posts/${id}/comments`)
      .then(res => setData(res.data.comments))
    }
  },[])

  return (
    <div className={styles.main}>
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