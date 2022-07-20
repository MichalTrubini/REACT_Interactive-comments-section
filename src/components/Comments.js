import Comment from "./Comment";

import data from '../data/data.json';

import '../assets/styles/css/comments.css'

const Comments = () => {

    console.log(data.comments[1].replies.length)

    return (
        <div className="comments">
            {data.comments.map( item => 
            <>
                <Comment 
                    key={item.id} 
                    comment={item.content} 
                    profileImage={item.user.image.webp} 
                    profileName={item.user.username} 
                    date={item.createdAt} 
                    count={item.score}
                />
                {item.replies.length > 0 && item.replies.map(subitem =>                 <Comment 
                key={subitem.id} 
                comment={subitem.content} 
                profileImage={subitem.user.image.webp} 
                profileName={subitem.user.username} 
                date={subitem.createdAt} 
                count={subitem.score}
            />
                )
                
                }
            </>
            )}
        </div>
    )
}

export default Comments;