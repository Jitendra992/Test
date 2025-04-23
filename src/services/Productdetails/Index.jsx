import axios from "axios"
import { BaseUrl, Token } from "../../config/BaseUrl"
import { EndPoints } from "../../config/EndPoints"

export const Getfirst=(reqbody)=>{
    try{
        const response=axios.get(BaseUrl+EndPoints.productdetails,{
            params:reqbody,
            headers:{
                Authorization:Token
            },
        });
        return response
    } catch(e){
        
        throw new console.log(e)
    }
    

    
}