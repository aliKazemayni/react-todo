import React from "react";
import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom";

const root = createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);