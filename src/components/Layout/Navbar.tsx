// import { Link } from 'react-router-dom';
import './Navbar.css'
import HomeIcon from '@/assets/icon-back-24.png';

export const Navbar = () => {
  return (
    <nav id="menuMain" className="navbar navbar-expand-md navbar-dark bg-opacity-10 mb-3" aria-label="Offcanvas navbar large">
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col-5 d-flex align-items-center">
            <a className="navbar-brand" href="./index.html">
              <h1 className="fs-4 m-0 p-0"><img src="./public/brand.png" alt="Brand of JINTEX" /></h1>
            </a>
            <a href="./index.html" className="d-flex backButton">
              <img src={HomeIcon} />
              <p className="m-0">首頁</p>
            </a>
            
            <a href="../index.html" className="d-flex backButton">
              <img src="/assets/icon-back-24.png" />
              <p className="m-0">上一頁</p>
            </a>
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
                      <a href="" className="text-light"><img src="./img/comm/FontAwesome/earth-asia-solid.svg" alt="langue" /> 繁體中文</a>
                    </div>
                    <div className="inline welcome mx-2">
                      <a href="/JINTEX_EC/zz_query/cart.html" className="text-light" id="cartUrl"><img src="./img/comm/FontAwesome/cart-shopping-solid.svg" alt="cart" /> 購物車</a>
                    </div>
                    <a className="inline nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="./assets/user-gear-solid.svg" alt="Admin option" />
                    </a>
                    {/* <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#" id="accountStatus">使用者</a></li>
                      <li><a className="dropdown-item" href="#" id="changePassword" onclick="openChangePwdModal()">修改密碼</a></li>
                      <li><a className="dropdown-item" href="#" id="lineMenber" onclick="openLineMenberModal()">Line會員</a></li>
                      <li><a className="dropdown-item" href="#" id="contact" onclick="openContactModal()">聯絡我們</a></li>
                      <li><a className="dropdown-item" href="#" id="logout">登出</a></li>
                    </ul> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
  // return (
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
};