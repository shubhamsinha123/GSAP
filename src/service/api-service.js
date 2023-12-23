import {
  fundCategory,
  referenceManagerData,
} from "../components/localArrays/data";
import { sendRequest } from "./axios-config";

const defaultPostOptions = {
  method: "POST",
  accessToken: "",
};

const defaultGetOptions = {
  method: "GET",
  accessToken: "",
};

/**
 * Refrence data manager get call
 *
 * @returns {*} mocked/hard data
 */
const getReferenceList = () => {
  // returning hardcoded array since API is yet to be developed
  return referenceManagerData;
};

/**
 * API call to get reference Data from DynamoDB table
 * @param  {string} apiGatewayUrl
 * @param {string} tableName
 * @return response body
 */

// Add access token,tenantId once API development is complete
// url: `${apiGatewayUrl}/referenceData/${encodeURIComponent(tenantId)}/${tableName}`,
const getReferenceData = async (apiGatewayUrl, tableName) => {
  const requestOptions = Object.assign({}, defaultGetOptions, {
    url: "https://dummy-json-url",
  });

  // await addAuthorization({ requestOptions, getEllucianInternalJwt });

  const data = await sendRequest(requestOptions);
  // returning hardcoded array since API is yet to be developed
  return fundCategory;
};

export default {
  getReferenceList,
  getReferenceData,
};
