import s from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = props => {
    return (
        <>
            <h1 className={s.profileTitle}>Profile: {props.profile?.fullName}</h1>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </>
    );
};

export default Profile;
