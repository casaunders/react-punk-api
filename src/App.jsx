import React from "react";
import { useState, useEffect } from "react";
import "./App.scss";
import Main from "./containers/Main/Main";
import NavBar from "./containers/NavBar/NavBar";

function App() {
    const [beers, setBeers] = useState([]);
    const [filterByABV, setFilterByABV] = useState(false);
    const [filterByClassic, setFilterByClassic] = useState(false);
    const [filterByPh, setFilterByPh] = useState(false);


    useEffect(() => {
        getBeers();
    }, [filterByABV, filterByClassic, filterByPh]);

    const getBeers = async () => {
        const res = await fetch("https://api.punkapi.com/v2/beers/");
        const data = await res.json();
        console.log(data)
        setBeers(data)
    };

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        const filteredBeersBySearch = beers.filter((beer) =>
            `{beer.name}`.toLowerCase().includes(value));
        setBeers(filteredBeersBySearch)
    };

    const handleAbvFilter = (e) => {
        setFilterByABV(e.target.checked)
    };

    const handleClassicFilter = (e) => {
        setFilterByClassic(e.target.checked)
    };

    const handlePhFilter = (e) => {
        setFilterByPh(e.target.checked)
    };

    return (
        <>
            <div className="navbar">
                <NavBar
                    handleSearch={handleSearch}
                    handleAbvFilter={handleAbvFilter}
                    handleClassicFilter={handleClassicFilter}
                    handlePhFilter={handlePhFilter} />
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