<<<<<<< HEAD
import React from 'react';
import Login from './LoginComponent';
import Signup from './SignupComponent';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
=======
import React from 'react'
import Login from './LoginComponent'
import Signup from './SignupComponent'
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
>>>>>>> ac4a796a7c9c7c6a6d1531c2f986f5f79cfccc85

export default function Main() {
	return (
		<Router>
			<Routes />
		</Router>
	);
}

const Routes = () => {
<<<<<<< HEAD
	return (
		<Switch>
			{/* new component pages to be added here */}
			<Route path="/login" component={Login} />
			<Route path="/signup" component={Signup} />
			<Route exact path="/" component={Home} />
		</Switch>
	);
};
=======
    return (
        <Switch>
            {/* new component pages to be added here */}
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route  exact path="/" component={Home} />
        </Switch>
    )
}
>>>>>>> ac4a796a7c9c7c6a6d1531c2f986f5f79cfccc85
