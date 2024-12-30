export const config = {
  // 儲存 token資訊命名開頭
  //等同畫面 左上標題
  PROJECT_SAVE_NAME:'JINTEX',

  // 網站名稱
  PROJECT_NAME:'JINTEX_EC',
  
// api 預設 參數
  // default_ip:location.hostname + (location.port ? ':' + location.port : ''),
  default_ip: "localhost",

  // default_Api_Name:'ESG_BIAPIV2',
  default_Api_Name:'JTEK_ECWEB_API',
  // 舊 api 預設 參數
  default_WebSiteName:'JINTEX',

  //報工 & 語系參數
  OPU_NAME:"ESG_APP",

  //预设语系
  // default_lng:localStorage.getItem(this.PROJECT_SAVE_NAME + '_v1_lng') || "en_us",
  // ClientName:this.PROJECT_SAVE_NAME + "_v1",
  //必須命名
  ClientVer:"1.0.0",
  //網頁SERVER模式(自動偵測API的網址)
  WebServerMode:false,

  //單語系
  LongType:'GetDic4APPOneLan',
}