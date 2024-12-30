import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEyeSlash,
  
} from '@fortawesome/free-solid-svg-icons';

export const LoginForm = () => {
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
                <p className="infoBtn" data-bs-toggle="modal" data-bs-target="#forgetPwdModal">忘記密碼?</p>
                <p className="ms-3 infoBtn" data-bs-toggle="modal" data-bs-target="#contactModal">聯絡我們</p>
              </div>

              <button
                type="button"
                className="w-100 btn btn-lg btn-primary mb-3"
                id="login"
              >
                Login
              </button>
            </form>
            <div className="mt-3 text-center">
              <small className="text-info text-opacity-50"
                >© COPYRIGHT – WEYU TECHNOLOGY CO.,LTD.</small
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
