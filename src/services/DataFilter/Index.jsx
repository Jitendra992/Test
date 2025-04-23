import axios from "axios";
import { BaseUrl, Token } from "../../config/BaseUrl";
import { EndPoints } from "../../config/EndPoints";


export const Datafilter = async (reqbody) => {
    try {
        const response = await axios.post(
            BaseUrl + EndPoints.dataFilter,
            reqbody,
            {
                headers: {
                    Authorization: Token
                }
            }
        );
        return response;
    } catch (e) {
        console.log(e);
        throw e;
    }
};
