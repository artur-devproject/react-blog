import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/loader/Loader";
import Modal from "../components/UI/modal/Modal";
import Pagination from "../components/UI/pagination/Pagination";
import { useFetching } from "../hooks/useFetching";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { usePosts } from "../hooks/usePosts";
import { getPageCount } from "../utils/pages";

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: "", search: ""})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const filteredPosts = usePosts(posts, filter.sort, filter.search)

  const [fetchPosts, isLoadingPosts, errorPosts] = useFetching(async() => {
    const response = await PostService.getAll(limit, page)
    setPosts([...posts, ... response.data])
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  const nodeObserve = useIntersectionObserver(() => {
    if(page < totalPages) setPage(page + 1)
  }, [isLoadingPosts])

  useEffect(() => {
    fetchPosts()
  }, [page])

  const addPost = (newPost) => {
    setPosts([newPost, ...posts])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(elem => elem.id !== post.id))
  }

  return (
    <div>
      <MyButton onClick={() => setModal(true)}>Create Post</MyButton>
      <Modal visible={modal} setVisible={setModal} >
        <PostForm add={addPost} />
      </Modal>
      <hr />
      <PostFilter filter={filter} setFilter={setFilter} />
      {errorPosts && <h1 style={{color: "red"}}>{errorPosts}</h1>}
      <PostList remove={removePost} posts={filteredPosts} title="Post List" />
      <div ref={nodeObserve}>{isLoadingPosts && <Loader /> }</div>
    </div>
  );
}

export default Posts;
