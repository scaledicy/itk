import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    };

    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    };
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    };
    onStatusChange = e => {
        this.setState({
            status: e.currentTarget.value,
        });
    };

    render() {
        return (
            <>
                {!this.state.editMode ? (
                    <span onDoubleClick={this.activateEditMode}>
                        {this.props.status || "status empty"}
                    </span>
                ) : (
                    <input
                        onChange={this.onStatusChange}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        type='text'
                        value={this.state.status}
                    />
                )}
            </>
        );
    }
}

export default ProfileStatus;
