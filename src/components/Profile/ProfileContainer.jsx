import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    fetchUserProfile,
    getStatus,
    updateStatus,
} from "redux/ProfileReducer";
import Profile from "./Profile";
import { withAuthRedirect } from "hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 17574;
        }
        this.props.fetchUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});
const mapDispatchToProps = {
    fetchUserProfile,
    getStatus,
    updateStatus,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
