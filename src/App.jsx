import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import "./App.css";
import Body from "./components/Body";
import { Footer } from "./components/Footer";
export default function App() {
  const [scroll, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Router>
        {scroll ? <SearchBar /> : <Header />}
        <Body/>
          <h1 style={{padding : "40px" , margin : "40x"}}>Inspiration for your next trip</h1>
        <div className="card">
        <Card  city={"Mussoorie"} url={"https://a0.muscache.com/im/pictures/aef20929-0d6a-40e7-8ac9-321ff0edf8c9.jpg?im_w=240"} Kilomiter={223} bgClr={"#cc2d4a"}/>
        <Card  city={"Manali"} url={"https://a0.muscache.com/im/pictures/73250991-433e-4950-b7d1-59bba711bb57.jpg?im_w=240"} Kilomiter={405} bgClr={"#bc1a6e"}/>

        <Card  city={"Kasauli"} url={"https://a0.muscache.com/im/pictures/06248faf-fafa-4adb-9447-3a393ca625a4.jpg?im_w=240"} Kilomiter={257} bgClr={"#de3151"}/>

        <Card city={"Haldwani"} url={"https://a0.muscache.com/im/pictures/68ef0c20-321d-42c0-beb4-13bce3e258a2.jpg?im_w=240"} Kilomiter={235} bgClr={"#d93b30"}/>


        </div>
        <Footer/>
      </Router>

    </>
  );
}
