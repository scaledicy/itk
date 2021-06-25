export const requiredField = values => {
    const errors = {}
    if (!values.newPostMessage) {
        errors.newPostMessage = 'Required'
    }
    return errors
}

export const maxLength30 = values => {
    const errors = {}
    if (values.newPostMessage.length > 30) {
        errors.newPostMessage = 'Max length 30 symbols'
    }
    return errors
}
