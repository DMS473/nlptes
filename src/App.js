// import logo from './logo.svg';
// import './App.css';

import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './pages/Home';
import Sidebar2 from '../src/components/Sidebar2'
import Welcome from './components/Welcome';
import Overview from './components/Konsep/Overview';
import Konsep from './components/Konsep/Konsep';

import CategoryPage from './components/Konsep/CategoryPage';
import CategoryList from './components/Konsep/CategoryList';
import DatasetDescription from './components/Konsep/DatasetDescription';

import Profile from './components/Profile';
import Kontak from './components/Kontak';


function App() {

  return (

    // <Container>
      <Router>
        <div>
          <Routes>
            {/* <Sidebar2 /> */}
            <Route path="/" element={<Home />}>
              
              <Route index element={<Welcome />} />
              {/* <Route path="/form" element={<FormComponent />} /> */}
              <Route path="/ontologi" element={<Overview />} />
              <Route path="/konsep" element={<Konsep />} />
              <Route path="/dataset" element={<DatasetDescription />} />
              <Route path="/category" element={<CategoryList />} />
              <Route path="/category/:categoryName" element={<CategoryPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/kontak" element={<Kontak />} />
            </Route>
            
            
          </Routes>
        </div>
      </Router>
    // </Container>
  );
}

export default App;
