import { config } from "../config/weyu_config";
const base = import.meta.env.BASE_URL;

// 登錄 API
export const userLogin = (username, password) => {
  const body = {
    UID: username,
    PWD: password,
  };
  const fetchURL = `${window.location.protocol}//${config.default_ip}/${config.default_Api_Name}/api/WeyuLogin`;

  fetch(fetchURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result) {
        localStorage.setItem("isLogin", "true");
        window.location.href = base;
      } else {
        alert("登入失敗");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("登入失敗");
    });
};
