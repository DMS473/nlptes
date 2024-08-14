import React from 'react';
import Header from '../components/Header'
// import Sidebar from '../components/Sidebar'
import Sidebar2 from '../components/Sidebar2'

import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from 'react-router-dom';

const Home = () => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      console.log(true);
      collapseSidebar();
    } else {
      console.log(false);
      collapseSidebar();
    }
  };

  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
       <Sidebar 
        style={{ height: "100vh" }}
        backgroundColor="rgb(255, 255, 255)"
        // breakPoint="sm"
        transitionDuration={400}
      >
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>AIRIS</h2>
          </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/" />}>Home</MenuItem>
          <SubMenu icon={<PeopleOutlinedIcon />} component={<Link to="#" />} label="E-IndQNER">
            <MenuItem icon={<PeopleOutlinedIcon />} component={<Link to="/ontologi" />}>Gambaran Umum</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon />} component={<Link to="/konsep" />}>Ontologi Konsep di Al-Qur’an</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon />} component={<Link to="/dataset" />}>Dataset</MenuItem>
          </SubMenu>
          <MenuItem icon={<ReceiptOutlinedIcon />} component={<Link to="/profile" />}>Tim Peneliti</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />} component={<Link to="/kontak" />}>Kontak</MenuItem>
          {/* <MenuItem icon={<HelpOutlineOutlinedIcon />} component={<Link to="#" />}>FAQ</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />} component={<Link to="#" />}>Calendar</MenuItem> */}
        </Menu>
      </Sidebar>
      <main>
        {/* <h1 style={{ color: "white", marginLeft: "5rem" }}>
          React-Pro-Sidebar
        </h1> */}
        {/* <h1
          onClick={() => {
            toggle();
          }}
          style={{ color: "white", marginLeft: "5rem" }}
        >
          React-Pro-Sidebar
        </h1>
        {toggled ? (
          <h1 style={{ color: "white", marginLeft: "5rem" }}>Toggled</h1>
        ) : (
          <h1 style={{ color: "white", marginLeft: "5rem" }}>Not Toggled</h1>
        )} */}
        {/* {broken && (
          <h1 style={{ color: "white", marginLeft: "5rem" }}>Small screen</h1>
        )} */}
      </main>
    
      <Outlet />
    </div>

    // <div className="">
    //     {/* <Header /> */}
    //     {/* <Sidebar /> */}
    //     {/* <Sidebar2 /> */}
    //     {/* <Container> */}
    //       <h2>Home</h2>
    //       <p>Selamat datang di halaman Home!</p>
    //     {/* </Container> */}
    //     <Outlet />
    // </div>
  );
};

export default Home;
