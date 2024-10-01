import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer} from "react-toastify";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/userAuth/Store.js";
import {Provider} from 'react-redux';
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
    <App />
    <ToastContainer />
    </Provider>
  </BrowserRouter>
);
