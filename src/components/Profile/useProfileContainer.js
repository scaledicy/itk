import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect } from 'react'
import {
    fetchUpdateUserProfile,
    fetchUserProfile,
    getStatus,
    savePhoto,
    updateStatus,
} from 'redux/ProfileReducer'

const useProfileContainer = () => {
    const params = useParams()
    const dispatch = useDispatch()

    //==== Data from state ====
    const data = useSelector(state => {
        return {
            profile: state.profilePage.profile,
            status: state.profilePage.status,
            authorizedUserId: state.auth.userId,
        }
    })

    const userId = params.userId || data.authorizedUserId

    //Dispatch handlers
    const fetchUserProfileHandler = useCallback(
        userId => dispatch(fetchUserProfile(userId)),
        [dispatch]
    )
    const savePhotoHandler = useCallback(
        file => dispatch(savePhoto(file)),
        [dispatch]
    )
    const getStatusHandler = useCallback(
        userId => dispatch(getStatus(userId)),
        [dispatch]
    )
    const updateStatusHandler = useCallback(
        status => dispatch(updateStatus(status)),
        [dispatch]
    )
    const saveProfileHandler = useCallback(
        profile => dispatch(fetchUpdateUserProfile(profile)),
        [dispatch]
    )

    useEffect(() => {
        if (userId) {
            fetchUserProfileHandler(userId)
            getStatusHandler(userId)
        }
    }, [userId, fetchUserProfileHandler, getStatusHandler])

    return {
        data: {
            profile: data.profile,
            status: data.status,
            isOwner: !params.userId,
        },
        handlers: {
            updateStatus: updateStatusHandler,
            savePhoto: savePhotoHandler,
            saveProfile: saveProfileHandler,
        },
    }
}

export default useProfileContainer
