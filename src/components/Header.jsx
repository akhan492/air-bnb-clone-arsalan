import React from "react";
import {Moon,Search ,Globe, Menu, User } from "react-feather";
import "./Header.css";
import SearchInput from "./SearchInput";
import { motion, transform } from "framer-motion";
export default function Header() {
  return (
   
    <>
    <motion.div className="header__section"
     initial={{ opacity: 0, scale: 0 }}
     animate={{ opacity: 1 , scale: 1, transition: { duration: 0.5 }  }}
     exit={{ opacity: 0 , scale: 0 }}
    
    >
      <div className="headerInner">
        <div className="logo">
          <img
            src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-symbol.jpg"
            alt="airbnb"
          />
        </div>
      </div>
      <nav>
        <a href="#" className="active">
          Places to stay
        </a>
        <a href="#">Experiences</a>
        <a href="#">Online Experiences</a>
      </nav>
      <div className="profile">
        <a href="#">Become a host</a>
        {/* <ThemeToggle icon /> */}
        <a href="#" className="globe">
          <Globe />
        </a>
        <a href="#" className="moon">
          <Moon />
        </a>
        <div className="user">
           <Menu  className="menu" /> 
           
            <User className="userIcon" /> 
        </div>
      </div>
    </motion.div>
   
      <SearchInput Search={Search}/>
   
</>
  );
}

