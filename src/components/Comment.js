import Counter from "./UI/Counter";
import Reply from "./UI/Reply";

import '../assets/styles/css/comment.css'
import Profile from "./UI/Profile";
import ContributionDate from "./UI/ContributionDate";
import CommentContent from "./UI/CommentContent";

const Comment = () => {
    return (
        <div className="comment">
            <div className="comment__user">
                <div className="comment__user-profile">
                    <Profile/>
                    <ContributionDate/>
                </div>
                <div className="comment__user-comment">
                    <CommentContent/>
                </div>
            </div>
            <div className="comment__interaction">
                <Counter />
                <Reply/>
            </div>
        </div>
    )
}

export default Comment;