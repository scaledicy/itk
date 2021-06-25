import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import sprite from 'assets/images/sprite.svg'
import useProfileContainer from './useProfileContainer'

const Profile = () => {
    const { data, handlers } = useProfileContainer()
    return (
        <>
            <h1 className={s.profileTitle}>
                Profile: {data.profile?.fullName}
            </h1>
            <div>
                <svg>
                    <use href={sprite + '#react-logo'}></use>
                </svg>
            </div>
            <ProfileInfo
                profile={data.profile}
                status={data.status}
                updateStatus={handlers.updateStatus}
                isOwner={data.isOwner}
                savePhoto={handlers.savePhoto}
            />
            <MyPostsContainer />
        </>
    )
}

export default Profile
