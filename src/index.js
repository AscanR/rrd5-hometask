import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import {Router} from "react-router-dom";
import history from "./utils/history";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Router history={history}>
          <App/>
      </Router>
);

