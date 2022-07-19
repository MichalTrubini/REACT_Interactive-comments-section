import replyArrow from '../../assets/images/icon-reply.svg'

import '../../assets/styles/css/reply.css'

const Reply = () => {
    return (
        <div className="reply">
            <img src={replyArrow} alt="reply"/>
            <p>Reply</p>
        </div>
    )
}

export default Reply;