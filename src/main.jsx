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
import ReviewDetails from './components/all-Review/ReviewDetails.jsx';
import UpdateReview from './components/my/UpdateReview.jsx';

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
        loader: ()=> fetch('https://gamer-review-server.vercel.app/review')
      },
      {
        path: "/allReview/:id",
        element: <ReviewDetails></ReviewDetails>,
        loader: ({params})=> fetch(`https://gamer-review-server.vercel.app/review/${params.id}`)
      },
      {
        path: "/addReview",
        element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
      },
      {
        path: "/myReview/update/:id",
        element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
        loader: ({params})=> fetch(`https://gamer-review-server.vercel.app/review/${params.id}`)
      },
      {
        path: "/myReview",
        element: <PrivateRoute><MyReview></MyReview></PrivateRoute>,
        loader: ()=> fetch('https://gamer-review-server.vercel.app/review')
      },
      {
        path: "/game",
        element: <PrivateRoute><Game></Game></PrivateRoute>,
        loader: ()=> fetch('https://gamer-review-server.vercel.app/game')
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
