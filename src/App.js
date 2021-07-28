import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Col,
  Row,
  button,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
} from "reactstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import Home from "../src/component/Home"
import Header from "./component/Header";
import Carouselsection from "./component/Carouselsection";
import Sliderimages from "./component/Sliderimages";
import Downloadapp from "./component/Downloadapp";
import Songplaysection from "./component/Songplaysection";
import Cardsection from "./component/Cardsection";
import Aboutus from "./component/Aboutus";
import Footer from "./component/Footer";


function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);




  return (


    <div className="main">
      <div className="overtext">




        {/*         <================================Header Section==========================> */}


        <><Header /></>



        {/*         <================================Carousel Section==========================> */}

        <Carouselsection />

      </div>

      <Sliderimages />


      {/*      <======================================Carousel Section end==========================> */}






      {/*         <================================Section2 Download App==========================> */}



      <Downloadapp />






      {/*         <================================Section3 Song play list ==========================> */}



      <Songplaysection />



      {/*         <================================Section4 Card section==========================> */}


      <Cardsection />



      {/*         <================================Section5  ABoutus ==========================> */}


      <Aboutus />

      {/*         <================================Section6  Footer ==========================> */}


      <Footer />



      {/*         <================================End ==========================> */}

    </div>
  );
}

export default App;
