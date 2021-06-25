import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import sprite from 'assets/images/sprite.svg'

const Profile = props => {
    return (
        <>
            <h1 className={s.profileTitle}>
                Profile: {props.profile?.fullName}
            </h1>
            <div>
                <svg>
                    <use href={sprite + '#react-logo'}></use>
                </svg>
            </div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
            />
            <MyPostsContainer />
        </>
    )
}

export default Profile
