import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from './components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Greetings } from "./pages/Greetings/Greetings";
import { HomeChat } from "./pages/HomeChat/HomeChat";
import { Provider } from "react-redux";
import { store } from "./store";

import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Greetings />,
  },
  {
    path: "/chat",
    element: <HomeChat />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <RouterProvider router={router}/>
      </Layout>
    </Provider>
  </React.StrictMode>
);
