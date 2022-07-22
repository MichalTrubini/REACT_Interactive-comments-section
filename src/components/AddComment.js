import SendButton from './UI/SendButton';

import '../assets/styles/css/comment.css'

const AddComment = (props) => {
    return (
        <div className="comment comment__new">
            <textarea wrap='soft' placeholder='Add a comment...' className='comment__input'/>
            <img src={props.profileImage} alt={props.username} className='comment__user-image'/>
            <SendButton className='comment__submit'/>
        </div>
    )
}

export default AddComment;