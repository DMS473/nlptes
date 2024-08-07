// import logo from './logo.svg';
// import './App.css';

import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './pages/Home';
import Sidebar2 from '../src/components/Sidebar2'
import Welcome from './components/Welcome';
import FormComponent from './components/FormComponents';
import Overview from './components/Konsep/Overview';
import Konsep from './components/Konsep/Konsep';

import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";


function App() {
  // const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
  // const toggle = () => {
  //   toggleSidebar();
  //   if (toggled) {
  //     console.log(true);
  //     collapseSidebar();
  //   } else {
  //     console.log(false);
  //     collapseSidebar();
  //   }
  // };
  return (
  //   <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
  //     <Sidebar 
  //       style={{ height: "100vh" }}
  //       backgroundColor="rgb(0, 249, 249)"
  //       // breakPoint="sm"
  //       transitionDuration={400}
  //     >
  //       <Menu>
  //         <MenuItem
  //           icon={<MenuOutlinedIcon />}
  //           onClick={() => {
  //             collapseSidebar();
  //           }}
  //           style={{ textAlign: "center" }}
  //         >
  //           {" "}
  //           <h2>Admin</h2>
  //         </MenuItem>
  //         <SubMenu icon={<HomeOutlinedIcon />} label="Home">
  //           <MenuItem icon={<PeopleOutlinedIcon />}>Item 1</MenuItem>
  //           <MenuItem icon={<PeopleOutlinedIcon />}>Item 2</MenuItem>
  //           <MenuItem icon={<PeopleOutlinedIcon />}>Item 3</MenuItem>
  //         </SubMenu>
  //         <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
  //         <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
  //         <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
  //         <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
  //         <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
  //       </Menu>
  //     </Sidebar>
  //     <main>
  //       {/* <h1 style={{ color: "white", marginLeft: "5rem" }}>
  //         React-Pro-Sidebar
  //       </h1> */}
  //       <h1
  //         onClick={() => {
  //           toggle();
  //         }}
  //         style={{ color: "white", marginLeft: "5rem" }}
  //       >
  //         React-Pro-Sidebar
  //       </h1>
  //       {toggled ? (
  //         <h1 style={{ color: "white", marginLeft: "5rem" }}>Toggled</h1>
  //       ) : (
  //         <h1 style={{ color: "white", marginLeft: "5rem" }}>Not Toggled</h1>
  //       )}
  //       {/* {broken && (
  //         <h1 style={{ color: "white", marginLeft: "5rem" }}>Small screen</h1>
  //       )} */}
  //     </main>
    
    
  //   </div>




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
              {/* <Route path="/register" element={<Register />} /> */}
            </Route>
            
            
          </Routes>
        </div>
      </Router>
    // </Container>
  );
}

export default App;
