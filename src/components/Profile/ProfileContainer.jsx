import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    fetchUserProfile,
    getStatus,
    savePhoto,
    updateStatus,
} from "redux/ProfileReducer";
import Profile from "./Profile";

const ProfileContainerF = () => {
    const params = useParams();
    const dispatch = useDispatch();

    //Map dispatch to props
    const data = useSelector(state => {
        return {
            profile: state.profilePage.profile,
            status: state.profilePage.status,
            authorizedUserId: state.auth.userId,
        };
    });

    const userId = params.userId || data.authorizedUserId;

    //Dispatch handlers
    const fetchUserProfileHandler = useCallback(
        userId => dispatch(fetchUserProfile(userId)),
        [dispatch]
    );
    const savePhotoHandler = file => dispatch(savePhoto(file));
    const getStatusHandler = useCallback(
        userId => dispatch(getStatus(userId)),
        [dispatch]
    );
    const updateStatusHandler = status => dispatch(updateStatus(status));

    useEffect(() => {
        fetchUserProfileHandler(userId);
        getStatusHandler(userId);
    }, [userId, fetchUserProfileHandler, getStatusHandler]);

    return (
        <Profile
            profile={data.profile}
            status={data.status}
            updateStatus={updateStatusHandler}
            isOwner={!params.userId}
            savePhoto={savePhotoHandler}
        />
    );
};

export default ProfileContainerF;
