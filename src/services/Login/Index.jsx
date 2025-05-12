export const Loginmy = async (reqbody) => {
    try {
      const response = await axios.post(
        BaseUrl + EndPoints.Login,
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
  