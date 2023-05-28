import axios from "axios";

interface API_CALLS {
  [key: string]: {
    URL: string;
    method: string;
  };
}

const API_CALLS = {
  compile_code: {
    URL: "code/run",
    method: "POST",
  },

  compare_code: {
    URL: "code/question-run",
    method: "post",
  },

  submit_code: {
    URL: "code/question-submit",
    method: "post",
  },

  p_id: {
    URL: "results/p_id",
    method: "GET",
  },

  code_status: {
    URL: "code/status",
    method: "get",
  },

  upload_question: {
    URL: "question/create-question",
    method: "post",
  },

  all_questions: {
    URL: "question/all-questions",
    method: "get",
  },

  fetch_question: {
    URL: "question/get-question-by-id",
    method: "get",
  },
};

type objKey = keyof typeof API_CALLS;

export const apiCall = ({
  key,
  data,
  params,
  customURL,
}: {
  key: string;
  data?: {};
  params?: {};
  customURL?: string;
}) => {
  const { URL, method } = API_CALLS[key as objKey];
  const baseURL = "https://codeg-backend.onrender.com";
  return new Promise((resolve, reject) => {
    axios({
      baseURL: baseURL,
      url: customURL ?? URL,
      method: method,
      data: data,
      params: params,
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      // },
    })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
