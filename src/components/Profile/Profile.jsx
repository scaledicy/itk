import s from "./Profile.module.scss";
import profileBg from "../../assets/images/cats.jpg";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <>
      <h1>Profile</h1>
      <img className={s.profileBg} src={profileBg} alt=""/>
      <MyPosts />
    </>
  );
};

export default Profile;
