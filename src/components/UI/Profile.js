import profilePicture from '../../assets/images/avatars/image-amyrobson.webp'

import '../../assets/styles/css/profile.css'

const Profile = () => {
    return (
        <div className='profile'>
            <img src={profilePicture} alt="Amy Robson" className='profile__image'/>
            <p className='profile__name'>amyrobson</p>
        </div>
    )
}

export default Profile;