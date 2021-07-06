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
import { AppStore } from 'redux/ReduxStore'
import { ProfileFieldsType } from 'types/types'

interface UserProfileRouteParams {
    userId: string
}

const useProfileContainer = () => {
    const params = useParams<UserProfileRouteParams>()
    const dispatch = useDispatch()

    //==== Data from state ====
    const data = useSelector((state: AppStore) => {
        return {
            profile: state.profilePage.profile,
            status: state.profilePage.status,
            authorizedUserId: state.auth.userId,
        }
    })

    const userId = +params.userId || data.authorizedUserId

    //Dispatch handlers
    const fetchUserProfileHandler = useCallback(
        (userId: number) => dispatch(fetchUserProfile(userId)),
        [dispatch]
    )
    const savePhotoHandler = useCallback(
        (file: any) => dispatch(savePhoto(file)),
        [dispatch]
    )
    const getStatusHandler = useCallback(
        (userId: number) => dispatch(getStatus(userId)),
        [dispatch]
    )
    const updateStatusHandler = useCallback(
        (status: string) => dispatch(updateStatus(status)),
        [dispatch]
    )
    const saveProfileHandler = useCallback(
        (profileFields: ProfileFieldsType) =>
            dispatch(
                fetchUpdateUserProfile({
                    ...profileFields,
                    userId: data.profile?.userId || 0,
                    photos: data.profile?.photos || {
                        large: null,
                        small: null,
                    },
                })
            ),
        [dispatch, data.profile?.userId, data.profile?.photos]
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
