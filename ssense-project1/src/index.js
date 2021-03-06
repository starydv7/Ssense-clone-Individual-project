import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChakraProvider } from "@chakra-ui/react";
import {BrowserRouter as Router} from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { CartProvider} from "react-use-cart";
import { store } from "./Redux/store";
import App from './App';
import { AuthProvider } from './pages/AuthContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <ReduxProvider store={store}>
    <CartProvider>
    <Router>
      <AuthProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
        </AuthProvider>
      </Router>
      </CartProvider>
      </ReduxProvider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);


reportWebVitals();
