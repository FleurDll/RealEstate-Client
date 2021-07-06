import ReactDOM from "react-dom";
import React from "react";
import GA4React from "ga-4-react";
import "./index.css";
import App from "./App";

const ga4react = new GA4React("G-WEG0DKW4K4");

(async () => {
    await ga4react.initialize();

    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
})();