import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Routers} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";
import refreshToken from "./services/refreshToken.jsx";
import {ModelProvider} from "./Context/ModelContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider
          store={createStore({
          authName:'_auth',
          authType:'cookie',
          cookieDomain: window.location.hostname,
              cookieSecure: window.location.protocol === 'http:',
      })}>
          <ModelProvider>
              <Routers>
                  <App />
              </Routers>
          </ModelProvider>
      </AuthProvider>
  </React.StrictMode>,
)
