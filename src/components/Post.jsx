export default function Post ({ post }) {
    return (
        <div className="postCard">
            <h2 className="postCard__title">{post.id} | {post.title}</h2>
            <hr />
            <p className="postCard__text">{post.body}</p>
        </div>
    )
}