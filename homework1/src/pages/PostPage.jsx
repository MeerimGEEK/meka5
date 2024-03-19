import { useState } from "react"
import styles from './PostPage.module.css'

const PostPage = () => {
  const [ postData, setPostData ] = useState({})

  const handlePost = () => {
    const request = fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: postData?.value,
      userId: 5,
    })
  })
  .then(res => res.json())
  console.log(request);
  }

  return (
    <div className={styles.main}>
      <label htmlFor="title">Введите заголовок</label>
      <input id="title" type="text" value={postData.value} onChange={e => setPostData({...postData, value: e.target.value})}/>
      <label htmlFor="title">Введите текст</label>
      <input id="body" type="text" value={postData.body} onChange={e => setPostData({...postData, body: e.target.value})}/>
      <button onClick={handlePost}>Опубликовать пост</button>
    </div>
  )
}

export default PostPage