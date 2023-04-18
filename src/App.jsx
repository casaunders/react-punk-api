import React from "react";
import { useEffect, useState } from "react";
import "./App.scss";
import Main from "./containers/Main/Main";
import NavBar from "./containers/NavBar/NavBar";

const App = () => {
    const [beers, setBeers] = useState([]);
    const [filterBySearch, setFilterBySearch] = useState(false);
    const [filterByABV, setFilterByABV] = useState(false);
    const [filterByClassic, setFilterByClassic] = useState(false);
    const [filterByPh, setFilterByPh] = useState(false);
    const [filterByIBU, setFilterByIBU] = useState(false);

    useEffect(() => {
        getBeers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterBySearch, filterByABV, filterByClassic, filterByPh, filterByIBU]);
    let url = "https://api.punkapi.com/v2/beers?per_page=72"

    if (filterBySearch) {
        url = `https://api.punkapi.com/v2/beers?beer_name=${filterBySearch}&`;
    }

    if (filterByClassic) {
        url = `https://api.punkapi.com/v2/beers?brewed_before=01-2010&`;
    }

    if (filterByABV) {
        url = `https://api.punkapi.com/v2/beers?abv_gt=6`;
    }

    if (filterByIBU) {
        url = `https://api.punkapi.com/v2/beers?ibu_gt=50.0`;
    }

    const getBeers = async () => {
        const res = await fetch(url);
        let data = await res.json();
        if (filterByPh) {
            data = beers.filter((beer) => beer.ph < 4.0);
        };
        console.log(data)
        setBeers(data)
    };

    const handleSearch = (e) => {
        setFilterBySearch(e.target.value.toLowerCase());
    };


    const handleABVFilter = (e) => {
        console.log("ABVChecked")
        setFilterByABV(e.target.checked)
    };

    const handleClassicFilter = (e) => {
        console.log("ClassicChecked")
        setFilterByClassic(e.target.checked)
    };

    const handlePhFilter = (e) => {
        setFilterByPh(e.target.checked)
    };

    const handleIBUFilter = (e) => {
        setFilterByIBU(e.target.checked)
    };

    return (
        <>
            <div className="navbar">
                <NavBar
                    handleSearch={handleSearch}
                    handleABVFilter={handleABVFilter}
                    handleClassicFilter={handleClassicFilter}
                    handlePhFilter={handlePhFilter}
                    handleIBUFilter={handleIBUFilter} />
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