import {
  jokeCategoriesUrl,
  mockablePostUrl,
  mockablePutUrl,
  mockableDeleteUrl,
} from "../DataLayer/config_url.js";
// Import the axios Method.
import {
  getAPICall,
  postAPICall,
  putAPICall,
  deleteAPICall,
} from "./axiosMethodCall.js";

// Axios Get Call - Get all jokes categories.
export const getJokeCategorieData = async () => {
  try {
    const response = await getAPICall(jokeCategoriesUrl);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
// Axios Post Call - MockablePost.
export const mockablePostData = async () => {
  try {
    const response = await postAPICall("mockablePostUrl", {
      posted_data: "example",
    });
    console.log("👉 Returned data:", response);
  } catch (error) {
    console.log(`😱 Axios request failed: ${error}`);
  }
};

// Axios Put Call - MockablePut.
export const mockablePutData = async () => {
  try {
    const response = await putAPICall("mockablePostUrl", {
      posted_data: "example",
    });
    console.log("👉 Returned data:", response.data);
  } catch (error) {
    console.log(`😱 Axios request failed: ${error}`);
  }
};

// Axios Delete Call - MockableDelete.
export const mockableDeleteData = async () => {
  try {
    const response = await deleteAPICall("mockablePostUrl");
    console.log("👉 Returned data:", response.data);
  } catch (error) {
    console.log(`😱 Axios request failed: ${error}`);
  }
};
