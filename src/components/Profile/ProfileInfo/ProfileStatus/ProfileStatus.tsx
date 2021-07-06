import React, { useEffect, useState } from 'react'

const ProfileStatus = (props: any) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateMode = () => {
        setEditMode(true)
    }
    const deactivateMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <>
            {!editMode ? (
                <span onDoubleClick={activateMode}>
                    {props.status || 'status empty'}
                </span>
            ) : (
                <input
                    onChange={onStatusChange}
                    autoFocus={true}
                    type='text'
                    onBlur={deactivateMode}
                    value={status}
                />
            )}
        </>
    )
}

export default ProfileStatus
