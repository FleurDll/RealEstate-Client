import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";
import Home from "./pages/Home";
import SingleBiens from "./pages/singleBiens";


const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    /* let slug = window.location.pathname; */

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <BrowserRouter>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/biens/:slug" component={SingleBiens} exact />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default App;