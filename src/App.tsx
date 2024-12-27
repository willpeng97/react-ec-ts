import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';

// 引入頁面組件
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import { Profile } from './pages/Profile';

export const App = () => {
  return (
    <Router>
      <div>
        {/* 固定導航欄 */}
        <Navbar />
        {/* 分頁內容 */}
        <main style={{ padding: '20px', minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<h1>404 - 頁面不存在</h1>} />
          </Routes>
        </main>
        {/* 固定頁尾 */}
        <Footer />
      </div>
    </Router>
  );
};