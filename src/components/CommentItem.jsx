export default function CommentItem ({ comment }) {
    return (
        <div className='comment'>
            <p className='comment__email'>{comment.email}</p>
            <h3 className='comment__name'>{comment.id} | {comment.name}</h3>
            <p className='comment__body'>{comment.body}</p>
        </div>
    )
}