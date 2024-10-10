import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import WishList from './WishList';
import Cart from './Cart';
import Maincontext from './context/Maincontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/pdetails/:id?",
    element:<ProductDetail/>
  },
  {
    path:'/wish',
    element:<WishList/>
  },
  {
    path:'/cart',
    element:<Cart/>
  }
]);
root.render(
  <React.StrictMode>
    <Maincontext>
     <RouterProvider router={router} />
     </Maincontext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
