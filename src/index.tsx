import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import store from "./store";
import "./styles/main.scss";
import { AuthContextProvider } from './store/auth-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={`${process.env.REACT_APP_BASE_PATH}`}>
        <AuthContextProvider>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
