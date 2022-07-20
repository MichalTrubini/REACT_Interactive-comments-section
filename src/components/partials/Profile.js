import profilePicture from '../../assets/images/avatars/image-amyrobson.webp'

import '../../assets/styles/css/profile.css'

const Profile = (props) => {
    return (
        <div className='profile'>
            <img src={props.profileImage} alt="Amy Robson" className='profile__image'/>
            <p className='profile__name'>{props.profileName}</p>
        </div>
    )
}

export default Profile;