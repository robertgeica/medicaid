import react from 'react';
import './app.css';
import {BrowserRouter} from 'react-router-dom'
import Main from './components/MainComponent'
import Chat from "/components/Chat/Chat"

const App = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  )
}

export default App;
