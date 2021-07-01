import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import useProfileContainer from './useProfileContainer'

const Profile = () => {
    const { data, handlers } = useProfileContainer()
    return (
        <>
            <h1 className={s.profileTitle}>
                Profile: {data.profile?.fullName}
            </h1>
            <ProfileInfo
                profile={data.profile}
                status={data.status}
                updateStatus={handlers.updateStatus}
                isOwner={data.isOwner}
                savePhoto={handlers.savePhoto}
                saveProfile={handlers.saveProfile}
            />
            <MyPostsContainer />
        </>
    )
}

export default Profile
