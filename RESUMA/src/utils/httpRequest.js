import axios from "axios";

export const requestWithoutToken = async (method, url, body) => {
  let request;

  switch (method) {
    case "GET":
      request = await axios.get(url);
      break;
    case "POST":
      request = await axios.post(url, body);
      break;
    default:
      break;
  }

  return request;
};

export const requestWithToken = async (method, url, body) => {
  let request;

  const headers = {
    "x-auth-token": localStorage.getItem("auth-token"),
  };

  switch (method) {
    case "GET":
      request = await axios.get(url, { headers: headers });
      break;
    case "POST":
      request = await axios.post(url, body, { headers: headers });
      break;
    case "PUT":
      request = await axios.put(url, body, { headers: headers });
      break;
    default:
      break;
  }

  return request;
};