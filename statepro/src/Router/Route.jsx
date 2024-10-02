import {
  createBrowserRouter,
} from "react-router-dom";
import App from '../App.jsx'
import Home from '../pages/Home.jsx'
import ErrorPage from "../Error-page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

  },
  {
    path: "/home",
    element: <Home />,
  },
]);
export default router;
