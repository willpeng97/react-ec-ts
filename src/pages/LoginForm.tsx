import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Modal, Button } from "react-bootstrap";

export const LoginForm = () => {
  // 登入按鈕
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/');
  };
  // 彈出視窗
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleShow = (modalName: string) => setActiveModal(modalName);
  const handleClose = () => setActiveModal(null);


  return (
    <div
      style={{
        backgroundImage: `url('/banner.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      {/* 主要內容 */}
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-md-10 mx-auto col-lg-5">
            <form
              className="p-3 border border-info border-opacity-10 rounded-3 bg-info bg-opacity-10 text-dark-emphasis"
            >
              <div id="brand" className="form-floating text-center">
                <img src='/brand.png' className="m-4 h-auto" style={{width:"250px"}} alt="Brand of JINTEX" />
              </div>
              <div className="text-center text-light mb-3">電子下單平台</div>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="id"
                  placeholder=""
                />
                <label htmlFor="id">Account</label>
              </div>
              <div className="form-floating position-relative">
                <input
                  type="password"
                  className="form-control"
                  id="pw"
                  placeholder=""
                />
                <label htmlFor="pw">Password</label>
                <div
                  className="position-absolute top-50 end-0 translate-middle-y me-3"
                  id="togglePassword"
                  aria-label="Toggle password visibility"
                >
                  <FontAwesomeIcon icon={faEyeSlash}/>
                </div>
              </div>
              
              <div className="d-flex px-1 pt-1">
                <p className="text-white opacity-75" style={{cursor:"pointer"}} onClick={() => handleShow("forgetPwd")}>忘記密碼?</p>
                <p className="ms-3 text-white opacity-75" style={{cursor:"pointer"}} onClick={() => handleShow("contactUs")}>聯絡我們</p>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-100 mb-3"
                id="login"
                onClick={handleLoginClick}
              >
                Login
              </Button>
            </form>
            <div className="mt-3 text-center">
              <small className="text-info text-opacity-50">
                © COPYRIGHT – WEYU TECHNOLOGY CO.,LTD.
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* 首次登入 Modal */}
      <Modal show={activeModal === "firstTimeLogin"} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>首次登入 設定帳號密碼</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mb-1 ps-0">
            <label htmlFor="newAccount" className="col-3 text-end">設定帳號:</label>
            <input type="text" id="newAccount" className="col-6" autoComplete="off"/>
          </div>
          <div className="row mb-1 ps-0">
            <label htmlFor="newPassword" className="col-3 text-end">設定密碼:</label>
            <input type="password" id="newPassword" className="col-6" autoComplete="off"/>
          </div>
          <div className="row ps-0">
            <label htmlFor="newPassword_Check" className="col-3 text-end">確認密碼:</label>
            <input type="password" id="newPassword_Check" className="col-6" autoComplete="off"/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            關閉
          </Button>
          <Button variant="primary" onClick={handleClose}>
            送出
          </Button>
        </Modal.Footer>
      </Modal>
      {/* 忘記密碼 Modal */}
      <Modal show={activeModal === "forgetPwd"} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>忘記密碼</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-1 ps-0 text-center">
            <p className="fw-lighter fs-6">
              請填入您的帳號<br/>密碼重設信件將寄送到您的信箱中。
            </p>
            <label htmlFor="forgetAccount" className="text-center">帳號:</label>
            <input type="text" id="forgetAccount" className="col-6" autoComplete="off" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            關閉
          </Button>
          <Button variant="primary" onClick={handleClose}>
            送出
          </Button>
        </Modal.Footer>
      </Modal>

      {/* 聯絡我們 Modal */}
      <Modal show={activeModal === "contactUs"} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>聯絡我們</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>若有任何問題請洽業務秘書</p>
          <p>電話: (03)3869968 分機:405 / 422</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            關閉
          </Button>
          <Button variant="primary" onClick={handleClose}>
            送出
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
