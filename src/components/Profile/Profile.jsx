import s from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
  return (
    <>
      <h1 className={s.profileTitle}>Profile</h1>
      <ProfileInfo />
      <MyPosts posts={props.posts} addPost={props.addPost} />
    </>
  );
};

export default Profile;
