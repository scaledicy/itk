import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    fetchUserProfile,
    getStatus,
    savePhoto,
    updateStatus,
} from "redux/ProfileReducer";
import Profile from "./Profile";
import { withAuthRedirect } from "hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId:
                this.props.match.params.userId || this.props.authorizedUserId,
        };
    }
    updateProfile(userId) {
        this.props.fetchUserProfile(userId);
        this.props.getStatus(userId);
    }
    componentDidMount() {
        this.updateProfile(this.state.userId);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        const userId =
            this.props.match.params.userId || this.props.authorizedUserId;

        if (userId !== this.state.userId) {
            this.setState({ userId });
            this.updateProfile(userId);
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                isOwner={!this.props.match.params.userId}
                savePhoto={this.props.savePhoto}
            />
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
});
const mapDispatchToProps = {
    fetchUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
