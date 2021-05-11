import s from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <>
      <h1 className={s.profileTitle}>Profile</h1>
      <ProfileInfo />
      <MyPosts />
    </>
  );
};

export default Profile;
