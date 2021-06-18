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
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import sprite from "assets/images/sprite.svg";

const ProfileInfo = props => {
    const onMainPhotoSelected = e => {
        if (e.target.files.length) {
            console.log(e.target.files[0]);
            props.savePhoto(e.target.files[0]);
        }
    };
    return (
        <div className={s.profileContainer}>
            <svg>
                <use href={sprite + "#river"}></use>
            </svg>
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
                {props.isOwner && (
                    <input type='file' onChange={onMainPhotoSelected} />
                )}
                <div className={s.socialLinks}>
                    {props.profile?.contacts?.facebook && (
                        <div>
                            <img src={facebook} alt='facebook' />
                            <span>{props.profile?.contacts?.facebook}</span>
                        </div>
                    )}
                    {props.profile?.contacts?.github && (
                        <div>
                            <img src={github} alt='github' />
                            <span>{props.profile?.contacts?.github}</span>
                        </div>
                    )}
                    {props.profile?.contacts?.instagram && (
                        <div>
                            <img src={instagram} alt='instagram' />
                            <span>{props.profile?.contacts?.instagram}</span>
                        </div>
                    )}
                    {props.profile?.contacts?.mainLink && (
                        <div>
                            <img src={mainLink} alt='mainLink' />
                            <span>{props.profile?.contacts?.mainLink}</span>
                        </div>
                    )}
                    {props.profile?.contacts?.twitter && (
                        <div>
                            <img src={twitter} alt='twitter' />
                            <span>{props.profile?.contacts?.twitter}</span>
                        </div>
                    )}
                    {props.profile?.contacts?.vk && (
                        <div>
                            <img src={vk} alt='vk' />
                            <span>{props.profile?.contacts?.vk}</span>
                        </div>
                    )}
                    {props.profile?.contacts?.website && (
                        <div>
                            <img src={website} alt='website' />
                            <span>{props.profile?.contacts?.website}</span>
                        </div>
                    )}
                    {props.profile?.contacts?.youtube && (
                        <div>
                            <img src={youtube} alt='youtube' />
                            <span>{props.profile?.contacts?.youtube}</span>
                        </div>
                    )}
                </div>
            </div>
            <h1 className={s.profileTitle}>About</h1>
            <div className={s.profileDesc}>
                {props.profile?.aboutMe && (
                    <div>
                        <span>About me:</span>
                        &nbsp;
                        {props.profile?.aboutMe}
                    </div>
                )}

                <div>
                    <span>Looking for work:</span>
                    &nbsp;
                    {props.profile?.lookingForAJob ? "Yes" : "No"}
                </div>
                {props.profile?.lookingForAJobDescription && (
                    <div>
                        <span>Work preferences:</span>
                        &nbsp;
                        {props.profile?.lookingForAJobDescription}
                    </div>
                )}
            </div>
            <ProfileStatusWithHooks
                status={props.status}
                updateStatus={props.updateStatus}
            />
        </div>
    );
};

export default ProfileInfo;
