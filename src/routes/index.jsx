import path from "path";
import Home from "../Pages/Home";
import Details1 from "../Componant/Details1";
import MannualData from "../Componant/MannualData";
import SignupPage from "../Componant/Signup";
import Cart from "../Componant/Cart";
import Payment from "../Componant/Payment";
import Wishlist from "../Componant/Wishlist";





export const routes=[

    {
        id:1,
        path:"/",
        element:<Home/>
    },

    {
        id:2,
        path:"/details/:p_id/:v_id/:slug",
        element:<Details1/>
    },
    {
        id:3,
        path:"/product",
        element:<MannualData/>
    },
    {
        id:4,
        path:"/signup",
        element:<SignupPage/>

    },

    {
        id:5,
        path:"/Cart",
        element:<Cart/>
    },
  {
    id:6,
    path:"/Payment",
    element:<Payment/>
  },
  {
    id:7,
    path:"/Wishlist",
    element:<Wishlist/>
  }


  




]