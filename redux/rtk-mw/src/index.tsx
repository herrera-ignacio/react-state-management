import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Counter} from "./features/counter/Counter";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <nav>
          <Link to="/counter">Counter</Link> |{" "}
          <Link to="/api">JSON API</Link>
        </nav>
        <div className="content">
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="counter" element={<Counter />} />
            <Route path="api" element={<div>Test</div>} />
        </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
