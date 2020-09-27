import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./style.css"
import NavBar from './component/NavBar';
import Carousel from './component/Carousel';
import OfficeType from './component/OfficeType';

function App() {
  return (
    <div>
        <NavBar />
        <Carousel />
        <OfficeType />
    </div>
  );
}

export default App;
