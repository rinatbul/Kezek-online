import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RestaurantsPage} from "./Pages/RestaurantsPage/RestaurantsPage";
import {Restaurant} from "./Pages/Restaurant/Restaurant";
import {AdminPage} from "./Pages/AdminPage/AdminPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "restaurants",
                element: <RestaurantsPage/>,
            },
            {
                path: "/restaurants/:id",
                element: <Restaurant/>,
            },
            {
                path: "admin",
                element:<AdminPage/> ,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
