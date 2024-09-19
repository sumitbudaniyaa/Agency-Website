import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider ,createBrowserRouter } from "react-router-dom";
import Contact from './contact/contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact /> }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
