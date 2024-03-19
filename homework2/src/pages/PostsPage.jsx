import { useEffect, useState } from "react"
import styles from './PostsPage.module.css'
import axios from 'axios'

const PostsPage = () => {
  const [ data, setData ] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/posts')
  .then(res => setData(res.data.posts))
  },[])

  return (
    <div className={styles.main}>
      {data?.map(el => <div key={el?.id}>{el?.title}</div>)}
    </div>
  )
}

export default PostsPage