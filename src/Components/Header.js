
import styled from "styled-components";
import React from "react";
import logo from "../assets/img/logo.png";

export default function Header() {
    return (
        <Topo>
            <div><img src={logo}></img></div>
        </Topo>);
}

const Topo = styled.header`
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        height: 80%;
        width: 35%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #3B240B;
        box-sizing: border-box;
        border-radius: 60px;
        border-color: #F7BE81;
        border-style: double;
        border-width: 8px;
    }
    img{
        height: 120%;
    }
    
`;