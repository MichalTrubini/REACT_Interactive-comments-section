import Comment from "./Comment";

import data from '../data/data.json';

import '../assets/styles/css/comments.css'
import AddComment from "./AddComment";

const Comments = () => {

    let string = JSON.stringify(data);

    localStorage.setItem('added-items', string);

    return (
        <div className="comments">
            {data.comments.map( item => 
            <>
                <Comment 
                    key={item.id} 
                    className='comment'
                    comment={item.content} 
                    profileImage={item.user.image.webp} 
                    profileName={item.user.username} 
                    date={item.createdAt} 
                    count={item.score}
                    id={'comment_' + item.id}
                />
          
                <div className={!item.replies.length > 0 ? 'comments__none' : 'comments__reply'}>

                    {item.replies.length > 0 && item.replies.map(subitem =>
                        
                            <Comment 
                                key={subitem.id} 
                                className='comment'
                                comment={subitem.content} 
                                profileImage={subitem.user.image.webp} 
                                profileName={subitem.user.username} 
                                date={subitem.createdAt} 
                                count={subitem.score}
                                id={'comment_' + subitem.id}
                            />
                        )
                    }
                 </div>
            </>
            )}

            <AddComment profileImage={data.currentUser.image.webp}/>
        </div>
    )
}

export default Comments;