import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyCEotsu5-7sdVmtYJ8FOSautoxq95JbqUU",
  authDomain: "netflix-clone-1fd99.firebaseapp.com",
  projectId: "netflix-clone-1fd99",
  storageBucket: "netflix-clone-1fd99.appspot.com",
  messagingSenderId: "1063954881630",
  appId: "1:1063954881630:web:858fd0cc7ac94a640ca8cf",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
