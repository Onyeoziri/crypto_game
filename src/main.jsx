import React from "react";
import ReactDOM from "react-dom/client";
import GlobalVaribles from "./context/GlobalVariables";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalVaribles>
      <App />
    </GlobalVaribles>
  </React.StrictMode>
);
