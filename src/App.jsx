import React from "react";
import { useState } from "react";
import "./App.scss";
import Main from "./containers/Main/Main";
import Button from "./components/Button/Button";

const App = () => {
    const [beers, setBeers] = useState([]);

    const url = "https://api.punkapi.com/v2/beers?page=2&per_page=80";

    const getBeers = async () => {

        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        setBeers(data)
    };

    return (

        <div className="app">
            <Main beers={beers} />
            <Button onClick={getBeers} label="Get Random Beers" />
        </div>

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