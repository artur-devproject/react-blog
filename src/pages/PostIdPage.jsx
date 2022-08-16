import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';
import PostService from "../API/PostService";
import Post from '../components/Post';
import CommentList from '../components/CommentList';

export default function PostIdPage () {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoadingPost, errorPost] = useFetching(async(id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const [fetchComments, isLoadingComments, errorComments] = useFetching(async(id) => {
        const response = await PostService.getComments(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            {errorPost && <h1 style={{color: "red"}}>{errorPost}</h1>}
            {isLoadingPost 
                ? <Loader />
                : <Post post={post} />
            }
            <h2>Comments</h2>
            {errorComments && <h1 style={{color: "red"}}>{errorComments}</h1>}
            {isLoadingComments 
                ? <Loader />
                : <CommentList comments={comments} />
            }
        </div>
    )
}