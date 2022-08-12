import React from "react";
import ReactDOM from "react-dom";

//import '@popperjs/core';

//import 'jquery';
//import 'popper.js';
//import 'bootstrap';

//import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";


import ViewService from "./views/ViewService";
import ServiceModal from "./views/ServiceModal";
import TestButton from "./views/ViewGServicio";
import Register from "./components/Register";
import GestionarServicio from "./views/ViewGServicio";
import Layout from "./views/Layout";
import ViewGestionar from "./views/ViewGestionar";


    ReactDOM.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>,
    document.getElementById("root")
    );

reportWebVitals();
