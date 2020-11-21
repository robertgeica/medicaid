import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import App from './App';

const rootElement = document.getElementById("root")
ReactDOM.render(
    <React.StrictMode>
        <Header />
        <App />
        <Footer />
    </React.StrictMode>,
    rootElement
)
