import axios from "axios";

const SineUpApiUrl =
  "Babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/users/auth/signup";

// // GET 요청 함수
// export const getEndpointData = () => {
//   return axios.get(`${SineUpApiUrl}/endpoint`);
// };

// POST 요청 함수
export const postToEndpoint = (requestData) => {
  return axios.post(`${SineUpApiUrl}/endpoint`, requestData);
};
