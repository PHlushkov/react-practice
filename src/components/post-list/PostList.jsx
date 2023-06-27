import React from "react";
import PostItem from "../post-item/PostItem";
import style from "./style/postList.module.css"
import { TransitionGroup, CSSTransition } from "react-transition-group";
// import CSSTransition from "react-transition-group";

const PostList = ({posts, title, remove} ) => {

    if(!posts.length) {
        return (
            <h1 style={{textAlign: "center"}}>
                Posts not found!
            </h1>
        )
    }

    return (
        <div>
            <h1 className={style.h1}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) => 
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                >
                    <PostItem number={index + 1} remove={remove} post={post}/>
                </CSSTransition>
                )}
            </TransitionGroup> 
        </div>
    )
}

export default PostList;
