// import logo from './logo.svg';
// import './App.css';

import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './pages/Home';
import Welcome from './components/Welcome';
import FormComponent from './components/FormComponents';

function App() {
  return (
    // <Container>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />}>
              
              <Route index element={<Welcome />} />
              <Route path="/form" element={<FormComponent />} />
              {/* <Route path="/register" element={<Register />} /> */}
            </Route>
            
            
          </Routes>
        </div>
      </Router>
    // </Container>
  );
}

export default App;
