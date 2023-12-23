import axios from "axios";
/**
 * Axios call to API endpoint
 *
 * @async
 * @param {*} request - request body
 * @returns {*} - response body
 */
export const sendRequest = async (request) => {
  try {
    const parameters = {
      url: request.url,
      method: request.method,
      data: request.body,
      query: request.queryString,
      params: request.queryString,
      headers: {
        authorization: `Bearer ${request.accessToken}`,
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios(parameters);
    return data;
  } catch (e) {
    console.log(`Error ${e}`);
    return null;
  }
};
