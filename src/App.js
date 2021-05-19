import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/sections/footerSection";
import Home from "./pages/Home";
import SingleBiens from "./pages/singleBiens";

const emailJSKey = {
    template: process.env.REACT_APP_EMAILJS_TEMPLATE,
    service: process.env.REACT_APP_EMAILJS_SERVICE,
    user: process.env.REACT_APP_EMAILJS_USER
};

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path="/"
                    render={(props) => (
                        <Home {...props} emailJSKey={emailJSKey} />
                    )}
                    exact
                />
                <Route path="/biens/:slug" component={SingleBiens} exact />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default App;