import axios from "axios";

//axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해

export const requestSignup = (method, url, data) => {
  return axios({
    method,
    url,
    data,
  })
    .then((res) => res.data)
    .catch((err) => err.response.data.message);
};

//토큰, get
export const request = (method, url, headers) => {
  return axios({
    method,
    url,
    headers,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

//토큰, post
export const requestDATA = (method, url, headers, data) => {
  return axios({
    method,
    url: url,
    headers,
    data,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
