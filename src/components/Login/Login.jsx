import { useFormik } from "formik";
import { connect } from "react-redux";
import { login } from "redux/AuthReducer";
import { Redirect } from "react-router-dom";

const LoginForm = props => {
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

            <button type='submit'>Submit</button>
        </form>
    );
};

const Login = props => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: values => {
            props.login(values.email, values.password);
        },
    });
    if (props.isAuth) {
        return <Redirect to='/profile' />;
    }
    return <LoginForm formik={formik} />;
};

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, {
    login,
})(Login);
