
import { message } from "antd";
import { API } from "aws-amplify/lib/index";
import axios from "axios";

export const RequestMethod = Object.freeze({
  GET: "get",
  POST: "post"
});


export function handleAPIResponse(apiCall) {
  return new Promise((resolve, reject) => {
    apiCall()
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(handleNetworkError(error));
      });
  });
}

export function onGetAmplify(apiName, path) {
  async function invokeAPI() {
    let resultParam = await getRequestParams({});

    return await API.get(apiName, path, resultParam);
  }

  return handleAPIResponse(invokeAPI);
}

export default async function request(path, payload = null, method = RequestMethod.GET, force = false, config = null) {
  return new Promise((resolve, reject) => {
    axios[method.toLowerCase()](path, payload, config)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(handleNetworkError(error));
      });
  });
}


export const handleNetworkError = error => {
  let errorResponse = JSON.parse(JSON.stringify(error));
  let status = 500;
  if (error && error.response) {
    errorResponse = error.response;
  } else if (error && error.request) {
    errorResponse = error.request;
  }
  if (errorResponse.status) {
    status = errorResponse.status;
  }
  return errorResponse;
};

export const showErrorMessage = (status, errorMessage) => {
  if (status !== 422 && status !== 400) {
    message.error(errorMessage);
  }
};

export async function getRequestParams(body) {
  return {
    headers: {},
    body: body
  };
}
