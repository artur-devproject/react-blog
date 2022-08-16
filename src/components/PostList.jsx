import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

export default function PostList({ posts, title, remove }) {
    if(!posts.length) {
        return (
            <h1>There are no posts ...</h1>
        )
    }

    return (
        <div id="postList">
            <h1>{title}</h1>
            <TransitionGroup>
                {posts.map((post) => 
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                >
                    <PostItem remove={remove} post={post} />
                </CSSTransition>)}
            </TransitionGroup>
        </div>
    )
}