import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes } from 'routes/routes'

const AppRouter: React.FC = () => {
    return (
        <Switch>
            {routes.map(routeProps => (
                <Route {...routeProps} key={routeProps.path as string} />
            ))}
        </Switch>
    )
}

export default AppRouter
