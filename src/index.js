import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducter from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

import promiseMiddleware from "redux-promise";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const store = createStore(
  rootReducter,
  composeWithDevTools(applyMiddleware(thunk))
);

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CookiesProvider>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </CookiesProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
