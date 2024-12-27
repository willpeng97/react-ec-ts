import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faArrowLeft,
  faEarthAsia,
  faShoppingCart,
  faGear,
} from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  return (
    <nav id="menuMain" className="navbar navbar-expand-md navbar-dark bg-opacity-10 mb-3">
      <div className="container-fluid">
        <div className="row w-100 align-items-center">
          {/* 左側 */}
          <div className="col-lg-4 col-md-6 d-flex align-items-center order-0 order-lg-0">
            {/* 公司 Icon */}
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <h1 className="fs-4 m-0 p-0"><img src="/brand.png" alt="Brand of JINTEX" /></h1>
            </Link>

            {/* 返回首頁 */}
            <Link to="/" className="btn btn-outline-secondary btn-sm ms-3">
              <FontAwesomeIcon icon={faHome} className="me-1" />
              首頁
            </Link>

            {/* 上一頁 */}
            <Link to="javascript:history.back()" className="btn btn-outline-secondary btn-sm ms-2">
              <FontAwesomeIcon icon={faArrowLeft} className="me-1" />
              上一頁
            </Link>
          </div>

          {/* 中間標題 */}
          <div className="col-lg-4 d-flex justify-content-center order-2 order-lg-1">
            <h2 className="fs-4 text-light m-0">主選單</h2>
          </div>

          {/* 右側 */}
          <div className="col-lg-4 col-md-6 d-flex justify-content-lg-end align-items-center order-1 order-lg-2">
            {/* 顯示使用者名稱 */}
            <span className="me-3">Welcome, <strong id="userName">使用者名稱</strong></span>

            {/* 切換語系 */}
            <Link to="#" className="btn btn-outline-secondary btn-sm me-2">
              <FontAwesomeIcon icon={faEarthAsia} className="me-1" />
              繁體中文
            </Link>

            {/* 購物車 */}
            <Link to="/cart.html" className="btn btn-outline-secondary btn-sm me-2">
              <FontAwesomeIcon icon={faShoppingCart} className="me-1" />
              購物車
            </Link>

            {/* 帳戶設定 */}
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary btn-sm dropdown-toggle"
                type="button"
                id="accountDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faGear} className="me-1" />
                帳戶設定
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="accountDropdown">
                <li><a className="dropdown-item" href="#">查看帳戶</a></li>
                <li><a className="dropdown-item" href="#">修改密碼</a></li>
                <li><a className="dropdown-item" href="#">登出</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};