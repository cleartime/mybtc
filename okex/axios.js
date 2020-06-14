import qs from "qs";
import axios from "axios";
axios.defaults.headers["content-type"] = "application/x-www-form-urlencoded";
axios.defaults.headers["X-MBX-APIKEY"] =
  "WEMG1J37O9sn9ysFEtpz6JFwRveBAJtLOhyqbHaicnImRrYFSi6eRJSK0fyGlflz";
// 9iUv29ZV88IfedTet4discH05uIfaRb3zb3PRgdL7J0fLcPBmMcDgjYKcdB6zVKB

export const init = function (api) {
  axios.get(api).then(function (response) {
    debugger;
  });
};

export const listenKey = function (api) {
  const data = { timestamp: +new Date() };
  const options = {
    method: "POST",
    data: qs.stringify(data), // 用 qs 将js对象转换为字符串 'name=edward&age=25'
    url: api,
  };
  axios(options)
    .then(function (response) {
      debugger;
    })
    .catch((err) => {
      console.log(err);
    });
};
