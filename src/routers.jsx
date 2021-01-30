import React from 'react';
import {Route, BrowserRouter as Router,  Switch,Redirect} from 'react-router-dom';
import Login from './views/login'
import ClientDashboard from './components/dashboards/client/dahsboard'
export default function Routers() {
    return (
        <Router>
           <Switch>
               <Route path={'/'} exact={true}>
                    <Login/>
               </Route>
               <PrivateRoute path={'/dashboard'}>
                    <ClientDashboard/>
               </PrivateRoute>
           </Switch>
        </Router>
    )
}

function PrivateRoute ({children, ...rest}){
    let auth = true//useAuth()
    return(
        <Route 
            {...rest}
            render={({location})=>
                auth?(
                    children
                ):
                <Redirect to = {{
                    pathname: '/',
                    state:{ from: location}
                }}/>
            }
        >

        </Route>
    )

}