import React from 'react'
import Profile from './Profile'
import useProfileContainer from './useProfileContainer'

const ProfileContainer = () => {
    const { data, handlers } = useProfileContainer()

    return (
        <Profile
            profile={data.profile}
            status={data.status}
            updateStatus={handlers.updateStatus}
            isOwner={data.isOwner}
            savePhoto={handlers.savePhoto}
        />
    )
}

export default ProfileContainer
