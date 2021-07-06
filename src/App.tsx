import CssBaseline from '@material-ui/core/CssBaseline'
import Footer from './components/Footer/Footer'
import Aside from './components/Aside/Aside'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import React from 'react'
import { withSuspense } from './hoc/withSuspense'
import Header from './components/Header/Header'

const Profile = React.lazy(() => import('./components/Profile/Profile'))
const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'))
const Users = React.lazy(() => import('./components/Users/Users'))

const App = () => {
    return (
        <>
            <CssBaseline />

            <div className='appContainer'>
                <Header />
                <div className='appGridContent'>
                    <Aside />
                    <div className='appContent'>
                        <Switch>
                            <Route
                                path='/profile/:userId?'
                                render={withSuspense(Profile)}
                            />
                        </Switch>
                        <Route
                            path='/messages'
                            render={withSuspense(Dialogs)}
                        />
                        <Route path='/users' render={withSuspense(Users)} />
                        <Route path='/login'>
                            <Login />
                        </Route>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default App
