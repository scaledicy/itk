import s from "./ProfileInfo.module.scss";
import profileBg from "../../../assets/images/cats.jpg";

const ProfileInfo = () => {
    return (
        <>
            <img className={s.profileBg} src={profileBg} alt='' />
        </>
    );
};

export default ProfileInfo;
