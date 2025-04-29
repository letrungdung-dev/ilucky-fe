import axios from "axios";

export const mainUrl = "http://localhost:8085";

axios.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export function callApi(url, method, data = {}) {
  const token = localStorage.getItem("token") || "";
  return axios({
    method,
    url,
    data,
    headers: token ? {
      Authorization: `Bearer ${token}`,
    } : {}
  }).catch((e) => {
    console.log("error", e);
    // Xử lý lỗi 401
    if (e.response && e.response.status === 401) {
      localStorage.removeItem("token");
      window.location.reload();
    }
    throw e;
  });
}
