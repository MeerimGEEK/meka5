import { useEffect, useState } from "react"
import styles from './PostsPage.module.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const PostsPage = () => {
  const [ data, setData ] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('https://dummyjson.com/posts')
  .then(res => setData(res.data.posts))
  },[])

  return (
    <div className={styles.main}>
      {data?.map(el => <div onClick={() => navigate(`/${el.id}`)} key={el?.id}>{el?.title}</div>)}
    </div>
  )
}

export default PostsPage