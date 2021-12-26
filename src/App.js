import { Navbar } from './components';
import GlobalStyle from './globalStyles';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (

      <Router>
        <GlobalStyle/>
        <Navbar/>

      </Router>

  );
}

export default App;
