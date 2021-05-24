import s from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = props => {
  return (
    <>
      <h1 className={s.profileTitle}>Profile</h1>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </>
  );
};

export default Profile;
