import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchUserProfile } from "redux/ProfileReducer";
import Profile from "./Profile";
import { withAuthRedirect } from "hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.fetchUserProfile(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />;
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
});
const mapDispatchToProps = {
    fetchUserProfile,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
