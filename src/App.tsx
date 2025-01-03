import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';

// 引入頁面組件
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Cart, CartItem } from './pages/Cart';
import { LoginForm } from './pages/LoginForm';
import { EnhancedTable } from './pages/EnhancedTable';
import tiles from './mockData/menuTiles.json'
import { useState } from 'react';
import { BasicTabs as Tabs } from './pages/Tabs';

// 傳遞購物車狀態

// App component
export const App = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const updateCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
  };

  return (
    <Router>
       <ConditionalLayout cart={cart} updateCart={updateCart} />
    </Router>
  );
};

// 判斷是否為登入頁
const ConditionalLayout = ({
    cart,
    updateCart,
  }: {
    cart: CartItem[];
    updateCart: (updatedCart: CartItem[]) => void;
  }) => {

  const base = import.meta.env.BASE_URL;
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
          <Route path={`${base}products`} element={<Products />} />
          <Route path={`${base}cart`} element={ <Cart cart={cart} updateCart={updateCart} />} />
          <Route path={`${base}EnhancedTable`} element={<EnhancedTable />} />
          <Route path={`${base}Tabs`} element={<Tabs />} />
          <Route path={`${base}*`} element={<h1>404 - 頁面不存在</h1>} />
        </Routes>
      </main>

      {/* 固定頁尾 */}
      <Footer />
    </div>
  );
};