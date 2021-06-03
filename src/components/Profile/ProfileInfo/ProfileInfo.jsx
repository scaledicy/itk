import s from "./ProfileInfo.module.scss";
import profileBg from "../../../assets/images/cats.jpg";

const ProfileInfo = props => {
    return (
        <>
            <img className={s.profileBg} src={profileBg} alt='' />
            <div>
                <img src={props.profile?.photos?.large} alt='profilePhoto' />
            </div>
        </>
    );
};

export default ProfileInfo;
