import axios from "axios";

export const Secondcontain=()=>{
    try{
        const response=axios.get(BaseUrl+EndPoints.mainCatogary,{
            headers:{
                Authorization:Token
            },
        });
        return response

    }
    catch(e){ throw new console.log(e)

    }
}