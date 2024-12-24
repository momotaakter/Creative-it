/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


*/
import  React from "react";
import  ReactDOM from "react-dom/client";
import {createBrowserRouter,  RouterProvider,} from "react-router-dom";
import './index.css'
import App from "./App";
import Home from './component/home/Home';
import About from './component/aboutus/About';
import Success from './component/success/Success story';
import Freelancing from './component/freelancing/Freelancing';
import Contact from './component/contact/Contact';
import Course from './component/course/Course'


//kono API ke sohoje call korte pari:loader er sahajje


const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,//main element er nicheii error element ta hobe
   
    children:[//children ta diteii hobe na dile linke click korle navbar ta chole jabe,,,


      {
        path:"/home",//akaen slash/ na dileoo cholbe
      
        element:<Home></Home>
      },
      {
        path:"/about",
        element:<About></About>/** */
      },
      {
      path:"/contact",
      element:<Contact></Contact>


      },

      {
   path:"/freelancing",
   element:<Freelancing></Freelancing>

      },
      {
        path:"/course",
        element:<Course></Course>
     
           },


           {
            path:"/success",
            element:<Success></Success>
         
               },   
 
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
