import React, { useState } from "react";
import MyButton from "../UI/btn/MyButton";
import MyInput from "../UI/input/MyInput";



const Form = ({posts, setPosts, setModal}) => {
    const [post, setPost] = useState({
        title: "",
        description: ""
    })

    const addNewPost = (e) => {
        e.preventDefault()
        setPosts([...posts, {...post, id: posts.length + 1}])
        setPost({title: "", description: ""})
        setModal(false)
    }
    return (
        <div>
            <form action="">
                <MyInput 
                    onChange={e => setPost({...post, title: e.target.value})} 
                    value={post.title} type="text"
                    placeholder="Name Post"/>
                <MyInput
                    value={post.description}
                    onChange={e => {setPost({...post, body: e.target.value})}} 
                    type="text"
                    placeholder="Discription Post"/>
                <MyButton onClick={addNewPost}>Create Post</MyButton>
            </form>
        </div>
    )
}

export default Form