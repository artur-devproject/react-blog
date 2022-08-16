import { useState } from "react"
import MyButton from "./UI/button/MyButton"
import MyInput from "./UI/input/MyInput"

const PostForm = ({ add }) => {
    const [post, setPost] = useState({
        title: '',
        body: '',
    })
    
    const createNewPost = (event) => {
        event.preventDefault()

        const newPost = {
            id: Date.now().toString(),
            ...post
        }

        add(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <MyInput 
                type="text" 
                placeholder="Post title ..." 
                value={post.title} 
                onChange={event => setPost({...post, title: event.target.value})} 
            />
            <MyInput 
                type="text" 
                placeholder="Post description ..."
                value={post.body}
                onChange={event => setPost({...post, body: event.target.value})}
            />
            <MyButton onClick={createNewPost}>Create post</MyButton>
      </form>
    )
}

export default PostForm;