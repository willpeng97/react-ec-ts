import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px' }}>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ margin: '0 10px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>首頁</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/products" style={{ color: '#fff', textDecoration: 'none' }}>產品列表</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/cart" style={{ color: '#fff', textDecoration: 'none' }}>購物車</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/profile" style={{ color: '#fff', textDecoration: 'none' }}>個人資料</Link>
        </li>
      </ul>
    </nav>
  );
};