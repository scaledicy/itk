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
import React, { useState } from 'react'
import ProfileDescription from './ProfileDescription/ProfileDescription'
import ProfileDescriptionEdit from './ProfileDescriptionEdit/ProfileDescriptionEdit'
import { ProfileFieldsType, ProfileType } from 'types/types'
import ProfileStatus from './ProfileStatus/ProfileStatus'

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

interface ProfileInfoProps {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any
    saveProfile: (profile: ProfileFieldsType) => void
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
    profile,
    status,
    updateStatus,
    isOwner,
    savePhoto,
    saveProfile,
}) => {
    const [editMode, setEditMode] = useState(false)

    const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = async (formData: ProfileFieldsType) => {
        await saveProfile(formData)
        setEditMode(false)
    }

    const { userId, photos, ...profileFields } = profile

    return (
        <div className={s.profileContainer}>
            <div className={s.profileHeader}>
                <div className={s.profileImg}>
                    {photos.large ? (
                        <img src={photos.large} alt='profilePhoto' />
                    ) : (
                        <img src={userEmpty} alt='emptyPhoto' />
                    )}
                </div>
                {isOwner && (
                    <input type='file' onChange={onMainPhotoSelected} />
                )}
            </div>
            {editMode ? (
                <ProfileDescriptionEdit
                    profile={profileFields}
                    handleSubmit={onSubmit}
                />
            ) : (
                <ProfileDescription
                    goToEditMode={() => {
                        setEditMode(true)
                    }}
                    profile={profile}
                    isOwner={isOwner}
                    socialImages={socialImages}
                />
            )}

            <ProfileStatus status={status} updateStatus={updateStatus} />
        </div>
    )
}

export default ProfileInfo
