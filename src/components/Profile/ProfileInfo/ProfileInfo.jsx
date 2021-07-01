import s from './ProfileInfo.module.scss'
import userEmpty from 'assets/images/user-empty.svg'
import github from 'assets/images/social-icons/github.svg'
import facebook from 'assets/images/social-icons/facebook.svg'
import instagram from 'assets/images/social-icons/instagram.svg'
import mainLink from 'assets/images/social-icons/main-link.svg'
import twitter from 'assets/images/social-icons/twitter.svg'
import vk from 'assets/images/social-icons/vk.svg'
import website from 'assets/images/social-icons/website.svg'
import youtube from 'assets/images/social-icons/youtube.svg'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks'
import { useState } from 'react'
import ProfileDescription from './ProfileDescription/ProfileDescription'
import ProfileDescriptionEdit from './ProfileDescriptionEdit/ProfileDescriptionEdit'

const socialImages = [
    facebook,
    github,
    instagram,
    mainLink,
    twitter,
    vk,
    website,
    youtube,
]

const ProfileInfo = props => {
    const [editMode, setEditMode] = useState(false)

    const onMainPhotoSelected = e => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = async formData => {
        await props.saveProfile(formData)
        setEditMode(false)
    }
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
                {props.isOwner && (
                    <input type='file' onChange={onMainPhotoSelected} />
                )}
            </div>
            {editMode ? (
                <ProfileDescriptionEdit
                    profile={props.profile}
                    handleSubmit={onSubmit}
                />
            ) : (
                <ProfileDescription
                    goToEditMode={() => {
                        setEditMode(true)
                    }}
                    profile={props.profile}
                    isOwner={props.isOwner}
                    socialImages={socialImages}
                />
            )}

            <ProfileStatusWithHooks
                status={props.status}
                updateStatus={props.updateStatus}
            />
        </div>
    )
}

export default ProfileInfo
