import react, { useEffect } from 'react';
import './app.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';

import setAuthToken from './utils/setAuthToken';
// Redux
import { Provider } from 'react-redux';
import store from './store/store';
import { loadUser } from './actions/auth';

// Check for existing auth token
if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
			<BrowserRouter>
				<Main />
			</BrowserRouter>
	);
};

export default App;
