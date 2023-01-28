import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import "./index.css"
import Me from "./about.js"
import Nav from "./navbar.js"
import App from "./App.js"



const Home = () => {
    return ( <
        >
        <
        Nav / >
        <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/pokemons"
        element = { < App / > } > < /Route> <
        Route path = "/matricula"
        element = { < Me / > } >

        <
        /Route> < /
        Routes > <
        /BrowserRouter>

        <
        />
    );
};
export default Home;