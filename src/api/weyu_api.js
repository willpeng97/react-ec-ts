import { config } from '../config/weyu_config';
const base = import.meta.env.BASE_URL

// 登錄 API
export const userLogin = () => {
  const body = {
      UID: "ADMINV2",
      PWD: "ADMINV2"
  };
  const fetchURL = `${window.location.protocol}//${config.default_ip}/${config.default_Api_Name}/api/WeyuLogin`

  fetch(fetchURL, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
  })
  .then(response => response.json())
  .then(data => {
      if (data.result) {
          alert("登入成功");
          window.location.href = base
      } else {
          alert(`${window.location.protocol}//${config.default_ip}/${config.default_Api_Name}/api/WeyuLogin`)
      }
  })
  .catch(error => {
      console.error('Error:', error);
      alert(`${window.location.protocol}//${config.default_ip}/${config.default_Api_Name}/api/WeyuLogin`)
      alert('登入失敗');
  });
};