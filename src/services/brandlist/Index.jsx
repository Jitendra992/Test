import axios from "axios";
import { BaseUrl, Token } from "../../config/BaseUrl";
import { EndPoints } from "../../config/EndPoints";

export const Apidata = async () => {
  try {
    const response = await axios.get(BaseUrl + EndPoints.brandlist, {
      headers: {
        Authorization: Token,
      },
    });
    return response;
  } catch (e) {
    console.error("Error while fetching brand list:", e);
    throw e;
  }
};
