import s from "./ProfileInfo.module.scss";
import userEmpty from "assets/images/user-empty.svg";
import facebook from "assets/images/social-icons/facebook.svg";
import github from "assets/images/social-icons/github.svg";
import instagram from "assets/images/social-icons/instagram.svg";
import mainLink from "assets/images/social-icons/main-link.svg";
import twitter from "assets/images/social-icons/twitter.svg";
import vk from "assets/images/social-icons/vk.svg";
import website from "assets/images/social-icons/website.svg";
import youtube from "assets/images/social-icons/youtube.svg";

const ProfileInfo = props => {
    return (
        <div className={s.profileContainer}>
            <div className={s.profileHeader}>
                <div className={s.profileImg}>
                    {props.profile?.photos?.large ? (
                        <img
                            src={props.profile?.photos?.large}
                            alt='profilePhoto'
                        />
                    ) : (
                        <img src={userEmpty} alt='emptyPhoto' />
                    )}
                </div>
                <div className={s.socialLinks}>
                    <div>
                        <img src={facebook} alt='facebook' />
                        <span>{props.profile?.contacts?.facebook}</span>
                    </div>
                    <div>
                        <img src={github} alt='github' />
                        <span>{props.profile?.contacts?.github}</span>
                    </div>
                    <div>
                        <img src={instagram} alt='instagram' />
                        <span>{props.profile?.contacts?.instagram}</span>
                    </div>
                    <div>
                        <img src={mainLink} alt='mainLink' />
                        <span>{props.profile?.contacts?.mainLink}</span>
                    </div>
                    <div>
                        <img src={twitter} alt='twitter' />
                        <span>{props.profile?.contacts?.twitter}</span>
                    </div>
                    <div>
                        <img src={vk} alt='vk' />
                        <span>{props.profile?.contacts?.vk}</span>
                    </div>
                    <div>
                        <img src={website} alt='website' />
                        <span>{props.profile?.contacts?.website}</span>
                    </div>
                    <div>
                        <img src={youtube} alt='youtube' />
                        <span>{props.profile?.contacts?.youtube}</span>
                    </div>
                </div>
            </div>
            <h1 className={s.profileTitle}>About</h1>
            <div className={s.profileDesc}>
                <div>
                    <span>About me:</span>
                    &nbsp;
                    {props.profile?.aboutMe}
                </div>
                <div>
                    <span>Looking for work:</span>
                    &nbsp;
                    {props.profile?.lookingForAJob ? "Yes" : "No"}
                </div>
                <div>
                    <span>Work preferences:</span>
                    &nbsp;
                    {props.profile?.lookingForAJobDescription}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
