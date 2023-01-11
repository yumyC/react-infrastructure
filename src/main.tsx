import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import Routes from '@/router/index'
import "normalize.css/normalize.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/scss-public/root.module.scss';
import './index.module.scss'
import store from '@/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
