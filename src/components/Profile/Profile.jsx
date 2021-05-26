import s from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
  return (
    <>
      <h1 className={s.profileTitle}>Profile</h1>
      <ProfileInfo />
      <MyPostsContainer />
    </>
  );
};

export default Profile;
