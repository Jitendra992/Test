import path from "path";
import Home from "../Pages/Home";
import Details1 from "../Componant/Details1";
import MannualData from "../Componant/MannualData";





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
    }

   

  




]