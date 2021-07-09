import { RouteProps } from 'react-router-dom'
import * as URL from './urls'
import Login from 'components/Login/Login'
import React from 'react'
import { withSuspense } from 'hoc/withSuspense'

//==== Lazy components ====
const Profile = React.lazy(() => import('components/Profile/Profile'))
const Dialogs = React.lazy(() => import('components/Dialogs/Dialogs'))
const Users = React.lazy(() => import('components/Users/Users'))

//==== Routes ====
export const routes: RouteProps[] = [
    {
        path: URL.LOGIN_URL,
        exact: true,
        component: Login,
    },
    {
        path: URL.PROFILE_URL,
        exact: false,
        render: withSuspense(Profile),
    },
    {
        path: URL.MESSAGES_URL,
        exact: true,
        render: withSuspense(Dialogs),
    },
    {
        path: URL.USERS_URL,
        exact: true,
        render: withSuspense(Users),
    },
]
