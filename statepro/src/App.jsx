import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import LoginNames from './pages/loginNames';
import Home from "./pages/Home";
import { useState } from 'react';
import ErrorPage from "./Error-page";

function App() {
  const [userObj, setUserObj] = useState(null);

  const handleRegistration = (user) => {
    setUserObj(user);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginNames onRegistration={handleRegistration} />,
      errorElement: <ErrorPage />,

    },
    {
      path: "/second",
      element: userObj ? <Home userObject={userObj} /> : <Navigate to="/" />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
