import React from 'react'
import { connect } from 'react-redux'
import { fetchAuthUserData, logout } from 'redux/AuthReducer'
import Header from './Header'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.fetchAuthUserData()
    }

    render() {
        return <Header {...this.props} logout={this.props.logout} />
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
const mapDispatchToProps = {
    fetchAuthUserData,
    logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
