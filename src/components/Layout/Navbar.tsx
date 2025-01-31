import { config } from '../../config/weyu_config';

import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCircleChevronLeft,
  faEarthAsia,
  faShoppingCart,
  faUserGear,
} from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const base = import.meta.env.BASE_URL

  // 登出按鈕
  const handleLogoutClick = () => {
    const keyword = config.PROJECT_SAVE_NAME;
    // 遍歷所有 localStorage 的鍵
    Object.keys(localStorage).forEach((key) => {
      if (key.includes(keyword)) {
        localStorage.removeItem(key); // 刪除符合條件的項目
      }
    });
    window.location.href = base;
  };

  return (
    <nav id={styles.navMain}>
      <div className="container-fluid">
        <div className="row w-100 align-items-center">
          {/* 左側 */}
          <div className="col-lg-5 col-md-6 d-flex align-items-center order-0 order-lg-0">
            {/* 公司 Icon */}
            <Link to={base} className={`${styles.navbarBrand} d-flex align-items-center`}>
              <h1 className="fs-4 m-0 p-0"><img src={`${base}brand.png`} alt="Brand of JINTEX" /></h1>
            </Link>

            {/* 返回首頁 */}
            <Link to={base} className={styles.navbarItem}>
              <FontAwesomeIcon icon={faHome} className="me-1" />
              首頁
            </Link>

            {/* 上一頁 */}
            <Link to={base} className={`${styles.navbarItem} ${styles.seperation}`}>
              <FontAwesomeIcon icon={faCircleChevronLeft} className="me-1" />
              上一頁
            </Link>
          </div>

          {/* 中間標題 */}
          <div className="col-lg-2 d-flex justify-content-center order-2 order-lg-1">
            <h2 className="fs-4 text-light m-0">主選單</h2>
          </div>

          {/* 右側 */}
          <div className="col-lg-5 col-md-6 d-flex justify-content-lg-end pe-0 align-items-center order-1 order-lg-2">
            {/* 顯示使用者名稱 */}
            <span className="me-1">Welcome, <strong id="userName">使用者名稱</strong></span>

            {/* 切換語系 */}
            <Link to="#" className={`${styles.navbarItem} ${styles.seperation}`}>
              <FontAwesomeIcon icon={faEarthAsia} className="me-1" />
              繁體中文
            </Link>

            {/* 購物車 */}
            <Link to={base + 'cart'} className={`${styles.navbarItem} ${styles.seperation}`}>
              <FontAwesomeIcon icon={faShoppingCart} className="me-1" />
              購物車
            </Link>

            {/* 帳戶設定 */}
            <div className="dropdown">
              <Link to="#"  className={`${`${styles.navbarItem} ${styles.seperation}`}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <FontAwesomeIcon icon={faUserGear} />
              </Link>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="accountDropdown">
                <li><Link to="#" className="dropdown-item">{localStorage.getItem(config.PROJECT_SAVE_NAME+"_BI_userName")}</Link></li>
                <li><Link to="#" className="dropdown-item">修改密碼</Link></li>
                <li><Link to="#" className="dropdown-item">Line會員</Link></li>
                <li><Link to="#" className="dropdown-item">聯絡我們</Link></li>
                <li><Link to="#" className="dropdown-item">操作說明</Link></li>
                <li><Link to="#" className="dropdown-item" onClick={handleLogoutClick}>登出</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};