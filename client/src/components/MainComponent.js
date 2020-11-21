import React from 'react'
import Login from './LoginComponent'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default function Main() {
    return (
        <Router>
            <Routes />
        </Router>
    )
}

const Routes = () => {
    return (
        <Switch>
            {/* new component pages to be added here */}
            <Route path='/login' component={Login} />
            {/* <Route  exact path="/" component={Landing} /> */}
        </Switch>
    )
}
