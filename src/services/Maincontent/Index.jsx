import axios from "axios"
import { BaseUrl, Token } from "../../config/BaseUrl"
import { EndPoints } from "../../config/EndPoints"

export const GetSecondData=()=>{
    try{
        const response=axios.get(BaseUrl+EndPoints.mainCatogary,{
            headers:{
                Authorization:Token
            },
        });
        return response
    } catch(e){
        
        throw new console.log(e)
    }
    

    
}