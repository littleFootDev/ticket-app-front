import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';


function App() {
  return (
    <Router>

      <div className="App">
        <Routes>
          <Route path="/connection" element={< Login />} />
          <Route path="/inscription" element={< Register />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
