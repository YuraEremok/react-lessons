import React, { Component } from 'react';

import './App.css';
import Slider from "./components/slider/slider";
import Calculator from "./components/Calculator/Calculator";



let App =()=>{

    return (
      <div className="App">

          <Slider/>
          <Calculator/>


      </div>
    );
  }


export default App;
