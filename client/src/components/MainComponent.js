import React from 'react';
import Login from './LoginComponent';
import Signup from './SignupComponent';
import Home from './Home';
import Profile from './ProfileComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChatWidget from './ChatWidget';

import { connect } from 'react-redux';

function Main({ isAuthenticated, user }) {
	return (
		<Router>
			{isAuthenticated && <ChatWidget/>}
			<Routes />
		</Router>
	);
}

const Routes = () => {
	return (
		<Switch>
			{/* new component pages to be added here */}
			<Route path="/login" component={Login} />
			<Route path="/signup" component={Signup} />
			<Route exact path="/" component={Home} />
			<Route exact path="/profile" component={Profile} />
		</Switch>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Main);