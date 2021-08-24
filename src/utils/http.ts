import axios from 'axios'

const http = axios.create({
  withCredentials: true,
  timeout: 5000,
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (conf) => {
    console.log("加载中...");
    return conf;
  },
  (error) => {
    // do something with request error
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    // 返回response.data，其它axios包装的数据不需要
    const res = response.data;
    if (res.code === 401) {
      window.location.href = res.msg;
    }

    if (res.code !== 200 && res.code !== 401) {
      console.error(res.msg || "未知错误，请联系管理员");
      return Promise.reject(res);
    }

    // Toast.hide();
    return res;
  },
  (error) => {
    const err = error.response;

    if (!err) {
      // 如果服务端未响应任何错误则抛出异常消息
      console.error("未知错误，请联系管理员");
      return Promise.reject(error.toJSON());
    }

    const errResponse = err.data;
    console.error(`错误消息：${errResponse.message}`);
    return Promise.reject(error);
  }
);

export default http;
