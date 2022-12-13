import React from "react";
import styled from "styled-components";
import img from "./assets/img/backgroundimg.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import Header from "./Components/Header";

export default function App() {
  return (
    <BrowserRouter>
    <Body>
      <Header/>
      <Routes>
        <Route path="/" element={<Products/>}/>
      </Routes>
    </Body>
    </BrowserRouter>
  );
}

const Body = styled.div`

  width: 100vw;
  height: 100vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

`;
