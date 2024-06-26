import React from "react";
import ReactDOM from "react-dom/client"
import { App } from "./components";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages";
import store from "./store/store.js"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);
