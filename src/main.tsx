import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RestaurantsPage} from "./Pages/RestaurantsPage/RestaurantsPage";
import {Restaurant} from "./Pages/Restaurant/Restaurant";
import {AdminPage} from "./Pages/AdminPage/AdminPage";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from "./Redux/rootReducer";
import thunk from "redux-thunk";

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

export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>,
)
