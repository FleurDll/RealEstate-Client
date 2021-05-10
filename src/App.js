import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/footer";
import Home from "./pages/Home";
import SingleBiens from "./pages/singleBiens";


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/biens/:slug" component={SingleBiens} exact />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default App;