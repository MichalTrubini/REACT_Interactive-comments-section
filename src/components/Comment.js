import Counter from "./UI/Counter";
import Reply from "./UI/Reply";

import '../assets/styles/css/comment.css'
import Profile from '../components/partials/Profile'
import ContributionDate from "../components/partials/ContributionDate";
import CommentContent from "./partials/CommentContent";

const Comment = (props) => {

    return (
        <div className={props.className}>
            <div className="comment__user">
                <div className="comment__user-profile">
                    <Profile profileImage={props.profileImage} profileName={props.profileName} />
                    <ContributionDate date={props.date}/>
                </div>
                <div className="comment__user-comment">
                    <CommentContent comment={props.comment}/>
                </div>
            </div>
            <div className="comment__interaction">
                <Counter count={props.count} id={props.id}/>
                <Reply/>
            </div>
            <div className="comment__reply-container">

            </div>
        </div>
    )
}

export default Comment;