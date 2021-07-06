import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { login } from 'redux/AuthReducer'
import { Redirect } from 'react-router-dom'
import { AppStore } from 'redux/ReduxStore'
import React from 'react'
import { FormikProps } from 'formik/dist/types'

export interface MyFormValues {
    email: string
    password: string
    captcha: string
}

interface LoginFormProps {
    formik: FormikProps<MyFormValues>
    captchaUrl: string | null
}

const LoginForm: React.FC<LoginFormProps> = props => {
    return (
        <form onSubmit={props.formik.handleSubmit}>
            <label htmlFor='email'>Email Address</label>
            <input
                id='email'
                name='email'
                type='email'
                onChange={props.formik.handleChange}
                value={props.formik.values.email}
            />
            <label htmlFor='password'>Password</label>
            <input
                id='password'
                name='password'
                type='password'
                onChange={props.formik.handleChange}
                value={props.formik.values.password}
            />
            {props.captchaUrl && (
                <div>
                    <label htmlFor='captcha'>Captcha</label>
                    <input
                        id='captcha'
                        name='captcha'
                        type='text'
                        onChange={props.formik.handleChange}
                        value={props.formik.values.captcha}
                    />
                </div>
            )}

            {props.captchaUrl && <img src={props.captchaUrl} alt='captcha' />}

            <button type='submit'>Submit</button>
        </form>
    )
}

const Login: React.FC = () => {
    const dispatch = useDispatch()

    const data = useSelector((state: AppStore) => ({
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl,
    }))

    const initialValues: MyFormValues = {
        email: '',
        password: '',
        captcha: '',
    }

    const formik = useFormik<MyFormValues>({
        initialValues,
        onSubmit: values => {
            dispatch(login(values.email, values.password, values.captcha))
        },
    })
    if (data.isAuth) {
        return <Redirect to='/profile' />
    }
    return <LoginForm formik={formik} captchaUrl={data.captchaUrl} />
}

export default Login
