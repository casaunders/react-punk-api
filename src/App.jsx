import React from "react";
import { useState, useEffect } from "react";
import "./App.scss";
import Main from "./containers/Main/Main";
import NavBar from "./containers/NavBar/NavBar";

function App() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        getBeers();
    });

    const getBeers = async () => {
        const res = await fetch("https://api.punkapi.com/v2/beers/");
        const data = await res.json();
        console.log(data)
        setBeers(data)
    };

    return (

        <>
            <div className="navbar">
                <NavBar />
            </div>
            <div className="app">
                <Main beers={beers} />
            </div>
        </>

    )
};

export default App;

// Need container for nav section.
// Need container for nesting Cards.
// Need components for main:
// Button(s)
// Filters
// Cards
// SearchBar