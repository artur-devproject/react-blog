import CommentItem from './CommentItem';

export default function CommentList ({ comments }) {
    return (
        <div className='commentList'>
                {comments.map(com => 
                    <CommentItem comment={com} key={com.id} />
                )}
        </div>
    )
}