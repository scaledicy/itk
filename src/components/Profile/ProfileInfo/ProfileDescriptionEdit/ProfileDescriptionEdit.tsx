import { useFormik } from 'formik'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { ProfileFieldsType } from 'types/types'
import React from 'react'

interface ProfileDescriptionEditProps {
    profile: ProfileFieldsType
    handleSubmit: (formData: ProfileFieldsType) => void
}

const ProfileDescriptionEdit: React.FC<ProfileDescriptionEditProps> = ({
    profile,
    handleSubmit,
}) => {
    let initialValues: ProfileFieldsType = {
        aboutMe: profile.aboutMe,
        lookingForAJobDescription: profile.lookingForAJobDescription,
        lookingForAJob: profile.lookingForAJob,
        fullName: profile.fullName,
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
    }
    const formik = useFormik<ProfileFieldsType>({
        initialValues,
        onSubmit: values => {
            handleSubmit(values)
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <TextField
                    name='aboutMe'
                    label='About me'
                    variant='outlined'
                    onChange={formik.handleChange}
                    value={formik.values.aboutMe}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={formik.values.lookingForAJob}
                            onChange={formik.handleChange}
                            name='lookingForAJob'
                        />
                    }
                    label='Looking for a job'
                />
                <TextField
                    name='lookingForAJobDescription'
                    label='Looking for a job description'
                    variant='outlined'
                    onChange={formik.handleChange}
                    value={formik.values.lookingForAJobDescription}
                />
                <TextField
                    name='fullName'
                    label='Full name'
                    variant='outlined'
                    onChange={formik.handleChange}
                    value={formik.values.fullName}
                />
            </div>
            <div>
                <div>Contacts</div>
                <div>
                    <TextField
                        name='contacts.facebook'
                        label='Facebook'
                        variant='outlined'
                        onChange={formik.handleChange}
                        value={formik.values.contacts.facebook}
                    />
                    <TextField
                        name='contacts.website'
                        label='Website'
                        variant='outlined'
                        onChange={formik.handleChange}
                        value={formik.values.contacts.website}
                    />
                    <TextField
                        name='contacts.vk'
                        label='VK'
                        variant='outlined'
                        onChange={formik.handleChange}
                        value={formik.values.contacts.vk}
                    />
                    <TextField
                        name='contacts.twitter'
                        label='Twitter'
                        variant='outlined'
                        onChange={formik.handleChange}
                        value={formik.values.contacts.twitter}
                    />
                    <TextField
                        name='contacts.instagram'
                        label='Instagram'
                        variant='outlined'
                        onChange={formik.handleChange}
                        value={formik.values.contacts.instagram}
                    />
                    <TextField
                        name='contacts.youtube'
                        label='Youtube'
                        variant='outlined'
                        onChange={formik.handleChange}
                        value={formik.values.contacts.youtube}
                    />
                    <TextField
                        name='contacts.github'
                        label='Github'
                        variant='outlined'
                        onChange={formik.handleChange}
                        value={formik.values.contacts.github}
                    />
                    <TextField
                        name='contacts.mainLink'
                        label='Main link'
                        variant='outlined'
                        onChange={formik.handleChange}
                        value={formik.values.contacts.mainLink}
                    />
                </div>
            </div>

            <button type='submit'>Submit</button>
        </form>
    )
}

export default ProfileDescriptionEdit
