import { RouteProps } from 'react-router-dom'
import * as URL from './urls'
import Login from 'components/Login/Login'

export const routes: RouteProps[] = [
    {
        path: URL.LOGIN_URL,
        exact: true,
        component: Login,
    },
]
