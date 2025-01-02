import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';

// 引入頁面組件
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import { Profile } from './pages/Profile';
import { LoginForm } from './pages/LoginForm';
import tiles from './mockData/menuTiles.json'

// App component
export const App = () => {
  return (
    <Router>
      <ConditionalLayout />
    </Router>
  );
};

// 判斷是否為登入頁
const ConditionalLayout = () => {
  const base = import.meta.env.BASE_URL
  const location = useLocation();
  const isLoginPage = location.pathname === `${base}login`;

  if (isLoginPage) {
    return <LoginForm />;
  }

  // 非登入頁
  return (
    <div>
      {/* 固定導航欄 */}
      <Navbar />

      {/* 分頁內容 */}
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path={`${base}`} element={<Home tiles={tiles} />} />
          <Route path={`${base}Products`} element={<Products />} />
          <Route path={`${base}Cart`} element={<Cart />} />
          <Route path={`${base}Profile`} element={<Profile />} />
          <Route path="*" element={<h1>404 - 頁面不存在</h1>} />
        </Routes>
      </main>

      {/* 固定頁尾 */}
      <Footer />
    </div>
  );
};