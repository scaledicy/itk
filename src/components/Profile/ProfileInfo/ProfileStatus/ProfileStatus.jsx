import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: "Yo",
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
    };

    render() {
        return (
            <>
                {!this.state.editMode ? (
                    <span onDoubleClick={this.activateEditMode}>
                        {this.props.status}
                    </span>
                ) : (
                    <input
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        type='text'
                        value={this.props.status}
                    />
                )}
            </>
        );
    }
}

export default ProfileStatus;
