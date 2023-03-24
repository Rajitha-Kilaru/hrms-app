
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux';
import { myreducers } from './Reducer/reducer';
import {legacy_createStore as createStore} from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
const store = createStore(myreducers);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

reportWebVitals();