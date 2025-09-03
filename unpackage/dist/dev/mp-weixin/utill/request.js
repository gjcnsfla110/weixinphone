"use strict";
const common_vendor = require("../common/vendor.js");
const { platform } = common_vendor.index.getSystemInfoSync();
let BASE_URL = "/api/";
if (platform === "devtools") {
  BASE_URL = "http://localhost/";
} else if (platform === "h5") {
  BASE_URL = "/api/";
} else
  ;
function request(options) {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: BASE_URL + options.url,
      method: options.method || "GET",
      data: options.data || {},
      header: {
        "Content-Type": "application/json;charset=UTF-8",
        ...options.header
      },
      success: (res) => {
        if (res.statusCode !== 200) {
          common_vendor.index.showToast({ title: "서버 오류", icon: "none" });
          reject(res.data);
        }
        let responesData = res.data.data;
        resolve(responesData);
      },
      fail: (err) => {
        common_vendor.index.showToast({ title: "네트워크 오류", icon: "none" });
        reject(err);
      },
      complete: () => {
      }
    });
  });
}
function serviceGet(url, data, header) {
  return request({ url, method: "GET", data, header });
}
exports.serviceGet = serviceGet;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utill/request.js.map
