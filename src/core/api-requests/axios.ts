import axios from "axios";

interface API_CALLS {
  [key: string]: {
    URL: string;
    method: string;
  };
}

const API_CALLS = {
  ide_call: {
    URL: "run",
    method: "POST",
  },

  p_id: {
    URL: "results/p_id",
    method: "GET",
  },
};

type objKey = keyof typeof API_CALLS;

export const apiCall = ({
  key,
  data,
  params,
}: {
  key: string;
  data: {};
  params: {};
}) => {
  const { URL, method } = API_CALLS[key as objKey];
  const baseURL = "https://codeg-backend.onrender.com";
  return new Promise((resolve, reject) => {
    axios({
      baseURL: baseURL,
      url: URL,
      method: method,
      data: data,
      params: params,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};