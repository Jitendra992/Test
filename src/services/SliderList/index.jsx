import axios from "axios";
import { BaseUrl, Token } from "../../config/BaseUrl";
import { EndPoints } from "../../config/EndPoints";

export const GetSliderFn = () => {
  try {
    const response = axios.get(BaseUrl + EndPoints.sliderList, {
      headers: {
        Authorization: Token,
      },
    });

    return response;
  } catch (e) {
    throw new console.error(e);
  }
};
