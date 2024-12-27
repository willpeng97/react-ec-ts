import './Navbar.css';
import { Link } from 'react-router-dom';  // 如果使用 react-router-dom，將 href 改為 Link 元素
import HomeIcon from '@/assets/icon-home-24.png';
import BackIcon from '@/assets/icon-back-24.png';
import SettingIcon from '@/assets/user-gear-solid.svg';
import EarthIcon from '@/assets/earth-asia-solid.svg';
import CartIcon from '@/assets/cart-shopping-solid.svg';

export const Navbar = () => {
  return (
    <nav id="menuMain" className="navbar navbar-expand-md navbar-dark bg-opacity-10 mb-3" aria-label="Offcanvas navbar large">
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col-5 d-flex align-items-center">
            <a className="navbar-brand" href="./index.html">
              <h1 className="fs-4 m-0 p-0"><img src="/brand.png" alt="Brand of JINTEX" /></h1>
            </a>

            {/* 使用 Link 組件替換 href */}
            <Link to="./index.html" className="d-flex backButton">
              <img src={HomeIcon} alt="Home" />
              <p className="m-0">首頁</p>
            </Link>

            <Link to="../index.html" className="d-flex backButton">
              <img src={BackIcon} alt="Back" />
              <p className="m-0">上一頁</p>
            </Link>
          </div>

          <div className="col-2 d-flex justify-content-center align-items-center">
            <h2 className="fs-4 m-0 p-0 text-light">主選單</h2>
          </div>

          <div className="col-5 d-flex justify-content-end align-items-center">
            <div className="offcanvas offcanvas-end text-bg-dark" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1">
                  <li className="nav-item dropdown">
                    <div className="inline welcome mx-2">
                      Welcome, <strong id="welcomeAccount"></strong>
                    </div>
                    <div className="inline welcome mx-2">
                      <a href="" className="text-light">
                        <img src={EarthIcon} alt="Language" /> 繁體中文
                      </a>
                    </div>
                    <div className="inline welcome mx-2">
                      <Link to="/JINTEX_EC/zz_query/cart.html" className="text-light" id="cartUrl">
                        <img src={CartIcon} alt="Cart" /> 購物車
                      </Link>
                    </div>
                    <button className="inline nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src={SettingIcon} alt="Admin Options" />
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link to="#" className="dropdown-item" id="accountStatus">使用者</Link></li>
                      <li><Link to="#" className="dropdown-item" id="changePassword" onClick={() => alert("修改密碼")}>修改密碼</Link></li>
                      <li><Link to="#" className="dropdown-item" id="lineMenber" onClick={() => alert("Line會員")}>Line會員</Link></li>
                      <li><Link to="#" className="dropdown-item" id="contact" onClick={() => alert("聯絡我們")}>聯絡我們</Link></li>
                      <li><Link to="#" className="dropdown-item" id="logout">登出</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  //    return (
  //   <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px' }}>
  //     <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
  //       <li style={{ margin: '0 10px' }}>
  //         <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>首頁</Link>
  //       </li>
  //       <li style={{ margin: '0 10px' }}>
  //         <Link to="/products" style={{ color: '#fff', textDecoration: 'none' }}>產品列表</Link>
  //       </li>
  //       <li style={{ margin: '0 10px' }}>
  //         <Link to="/cart" style={{ color: '#fff', textDecoration: 'none' }}>購物車</Link>
  //       </li>
  //       <li style={{ margin: '0 10px' }}>
  //         <Link to="/profile" style={{ color: '#fff', textDecoration: 'none' }}>個人資料</Link>
  //       </li>
  //     </ul>
  //   </nav>
  // );
  );
};
