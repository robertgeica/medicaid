import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import App from './App';
// Redux
import { Provider } from 'react-redux';
import store from './store/store';
const rootElement = document.getElementById("root")
ReactDOM.render(
    <React.StrictMode>
		<Provider store={store}>

        <Header />
        <App />
        <Footer />
		</Provider>

    </React.StrictMode>,
    rootElement
)
