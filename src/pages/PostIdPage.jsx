import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../components/hooks/useFetching'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'

function PostIdPage() {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching( async (id) => {
        const response = await PostService.getCommentsById(id)
        setComments(response.data)
    })

    useEffect(()=> {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1>You have opened the post page  {params.id}</h1>
            {isLoading
                ? <Loader/>
                :<div>{post.id}. {post.title}</div>

            }
            <h1>Comments</h1>
            {isComLoading
                ? <Loader/>
                :  <div>
                    {comments.map((com, id) => 
                        <div key={id}>
                            <h5>{com.email}</h5>
                            <div>{com.body}</div>
                        </div>
                        )}
                </div>
            }
        </div>
    )
}


export default PostIdPage