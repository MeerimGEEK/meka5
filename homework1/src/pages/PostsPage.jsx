import { useEffect, useState } from "react"
import styles from './PostsPage.module.css'

const PostsPage = () => {
  const [ data, setData ] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then(d => setData(d));
  },[])

  return (
    <div className={styles.main}>
      {data?.posts?.map(el => <div key={el?.id}>{el?.title}</div>)}
    </div>
  )
}

export default PostsPage