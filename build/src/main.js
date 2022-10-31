import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Routes from '@/router/index';
import 'semantic-ui-css/semantic.min.css';
import './index.module.scss';
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(BrowserRouter, { children: _jsx(Routes, {}) }) }));
//# sourceMappingURL=main.js.map