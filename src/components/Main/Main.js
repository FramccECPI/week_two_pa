import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "../Home/Home.js";
import Rainbow from "../Rainbow/Rainbow.js";
import Quotes from "../Quotes/Quotes.js";


class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Francis McCleneghen's Webpage with stuff</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/rainbow">Rainbow</NavLink></li>
                        <li><NavLink to="/quotes">Quotes</NavLink></li>
                        
                    </ul>
                    <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/rainbow" element={<Rainbow />}/>
                        <Route path="/quotes" element={<Quotes />}/>
                    </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}
export default Main;