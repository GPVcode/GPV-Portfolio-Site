import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  // Google Tag Manager container ID
  gtmId: 'GTM-W29Z22C'
}

TagManager.initialize(tagManagerArgs)

// render React app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
