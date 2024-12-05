import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root.jsx';
import Home from './components/home/Home.jsx';
import Login from './components/login/Login.jsx';
import AllReview from './components/all-Review/AllReview.jsx';
import AddReview from './components/add/AddReview.jsx';
import Game from './components/game/Game.jsx';
import MyReview from './components/my/MyReview.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import AuthProvider from './components/provider/AuthProvider.jsx';
import Register from './components/Registration/Register.jsx';
import PrivateRoute from './components/privateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allReview",
        element: <AllReview></AllReview>,
      },
      {
        path: "/addReview",
        element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
      },
      {
        path: "/myReview",
        element: <MyReview></MyReview>,
      },
      {
        path: "/game",
        element: <Game></Game>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element:<Register></Register> ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
