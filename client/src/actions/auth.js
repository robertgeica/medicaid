import axios from 'axios';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGOUT
} from './types';
import setAuthToken from '../utils/setAuthToken';

// Load user
export const loadUser = () => async (dispatch) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	try {
		const res = await axios.post('/api/auth');
		console.log(res);
		dispatch({
			type: USER_LOADED,
			payload: res.data
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: AUTH_ERROR
		});
	}
};


// Register uer
export const register = ({ role, email, password, firstName, lastName, phoneNumber }) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	const body = JSON.stringify({ role, email, password, firstName, lastName, phoneNumber });

	try {
		const res = await axios.post('/api/register', body, config);

		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data
		});

		dispatch(loadUser());
	} catch (error) {
		if (error) {
			console.log('Error', error);
		}

		dispatch({
			type: REGISTER_FAIL
		});
	}
};

export const login = (role, email, password) => async (dispatch) => {
	const body = { role, email, password };

	try {
		const res = await axios.post('/api/auth', body);
	console.log(res);

		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data
		});

		dispatch(loadUser());
	} catch (error) {
		if (error) {
			console.log('Error', error);
		}

		dispatch({
			type: LOGIN_FAIL
		});
	}
};

// Logout
export const logout = () => (dispatch) => {
	dispatch({
		type: LOGOUT
	});
};

