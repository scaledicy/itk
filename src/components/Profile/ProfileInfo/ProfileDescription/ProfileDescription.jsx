import s from '../ProfileInfo.module.scss'

const ProfileDescription = ({
    profile,
    isOwner,
    goToEditMode,
    socialImages,
}) => {
    return (
        <>
            {isOwner && (
                <button type='button' onClick={goToEditMode}>
                    Edit
                </button>
            )}
            <h1 className={s.profileTitle}>About</h1>
            <div className={s.profileDesc}>
                <div>
                    <span>User number:</span>
                    &nbsp;
                    {profile?.userId}
                </div>

                <div>
                    <span>Full name:</span>
                    &nbsp;
                    {profile?.fullName}
                </div>

                <div>
                    <span>About me:</span>
                    &nbsp;
                    {profile?.aboutMe}
                </div>

                <div>
                    <span>Looking for work:</span>
                    &nbsp;
                    {profile?.lookingForAJob ? 'Yes' : 'No'}
                </div>
                <div>
                    <span>Work preferences:</span>
                    &nbsp;
                    {profile?.lookingForAJobDescription}
                </div>
            </div>

            <div>Social media:</div>
            <div className={s.socialLinks}>
                {profile?.contacts &&
                    Object.keys(profile.contacts).map((key, i) => {
                        return (
                            <div key={key}>
                                <img src={socialImages[i]} alt={key} />
                                <span>{profile.contacts[key]}</span>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}

export default ProfileDescription
