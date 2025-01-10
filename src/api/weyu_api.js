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
    .then(async(loginData) => {
      if (loginData.result) {
        // 儲存 第一次的 TokenKey
        localStorage.setItem(config.PROJECT_SAVE_NAME + '_BI_TokenKey', loginData.TokenKey);
        // 儲存 Refresh_tokenkey *只存這一次
        localStorage.setItem(config.PROJECT_SAVE_NAME + '_BI_Refresh_TokenKey', loginData.Refresh_TokenKey);

        // 從SEC_USER 取得必要資料
        getUserData(username)
      } else {
        alert("getUserData失敗");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("登入失敗");
    });
};

const getUserData = (username,isForget) => {
  const fetchURL = `${window.location.protocol}//${config.default_ip}/${config.default_Api_Name}/api/GetGrid`;

  // 定义查詢条件参数对象
  let conditions = {
      Field: ["ACCOUNT_NO"],
      Oper: ["="],
      Value: [username]
  };

  // 构建请求头
  let headers = new Headers({
      'Content-Type': 'application/json',
      'SID': "350990892916491",
      'TokenKey': isForget ? 'WEYU54226552' : localStorage.getItem(config.PROJECT_SAVE_NAME+'_BI_TokenKey')
      // 可以添加其他必要的请求头信息
  });

  // 构建请求体
  let requestBody = JSON.stringify(conditions);

  // 构建请求配置
  let requestOptions = {
      method: 'POST', // 将请求方法设置为 "POST"
      headers: headers,
      body: requestBody // 将条件参数放入请求体
  };


  fetch(fetchURL, {
    method: 'POST', // 将请求方法设置为 "POST"
    headers: headers,
    body: requestBody // 将条件参数放入请求体
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result) {
        localStorage.setItem(config.PROJECT_SAVE_NAME + '_BI_accountNo', data.Grid_Data[0].ACCOUNT_NO);
        localStorage.setItem(config.PROJECT_SAVE_NAME + '_BI_ORIGINAL_ACCOUNT_NO', data.Grid_Data[0].ORIGINAL_ACCOUNT_NO);
        localStorage.setItem(config.PROJECT_SAVE_NAME + '_BI_userName', data.Grid_Data[0].USER_NAME);
        localStorage.setItem(config.PROJECT_SAVE_NAME + '_BI_PMAA005', data.Grid_Data[0].PMAA005);
        localStorage.setItem(config.PROJECT_SAVE_NAME + '_BI_ORDER_LEV', data.Grid_Data[0].ORDER_LEV);
        localStorage.setItem(config.PROJECT_SAVE_NAME + '_BI_PMAA001', data.Grid_Data[0].PMAA001);
        localStorage.setItem(config.PROJECT_SAVE_NAME + '_BI_ISMEMBER', data.Grid_Data[0].MEMBER);

        localStorage.setItem(config.PROJECT_SAVE_NAME + "_BI_isLogin", "true");
        window.location.href = base;
      }
    })
}
