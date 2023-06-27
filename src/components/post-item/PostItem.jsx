import React from "react";
import style from "./style/postItem.module.css"
import MyButton from "../UI/btn/MyButton";
import "../App/style/App.css"
import { useNavigate } from "react-router-dom";

const PostItem = ({post, remove, number} ) => {

    const router =useNavigate()

    return (
        <div className={style.posts}>
            <div className={style.wrap}>
                <div>
                    <h2>{post.id}. {post.title}</h2>
                    <p>{post.body}</p>
                </div>
                <div className="post__btn">
                    <MyButton onClick={()=> router(`/posts/${post.id}`)}>
                        Open
                    </MyButton>
                    <MyButton onClick={() => remove(post)}>
                        Delete
                    </MyButton>
                </div>
            </div>
        </div>
    )
}

export default PostItem