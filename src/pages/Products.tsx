import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";

// 商品介面
interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  unitWeight: number; // 每包裝重量 (公斤)
}
interface Company {
  label: string;
  value: string;
}
interface CartItem {
  id: number;
  name: string;
  totalWeight: number; // 購買的總公斤數
  unitWeight: number;
}

export const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // 商品列表
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // 篩選後的商品
  const [categories, setCategories] = useState<Company[]>([]); // 類別選項
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // 選中的類別
  const [searchKeyword, setSearchKeyword] = useState<string>(""); // 搜尋關鍵字
  const [cart, setCart] = useState<CartItem[]>([]); // 購物車內容
  const [quantity, setQuantity] = useState<{ [key: number]: number }>({}); // 商品購買公斤數
  const [currentPage, setCurrentPage] = useState<number>(1); // 當前頁碼
  const itemsPerPage = 5; // 每頁顯示的商品數量

  useEffect(() => {
    const mockProducts: Product[] = [
      { id: 1, name: "Product A", category: "獻麒", description: "Description A", unitWeight: 60 },
      { id: 2, name: "Product B", category: "和群纖維", description: "Description B",unitWeight: 150 },
      { id: 3, name: "Product C", category: "獻麒", description: "Description C", unitWeight: 150 },
      { id: 4, name: "Product D", category: "和群纖維", description: "Description D", unitWeight: 90 },
      { id: 5, name: "Product E", category: "裕展", description: "Description E", unitWeight: 120 },
      { id: 6, name: "Product F", category: "裕展", description: "Description F", unitWeight: 200 },
    ];
    const mockCategories = [
      { label:'選擇公司', value:'All' },
      { label:'獻麒-總公司', value:'獻麒' },
      { label:'和群纖維-總公司', value:'和群纖維' },
      { label:'裕展-總公司', value:'裕展' },
    ];

    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
    setCategories(mockCategories);
  }, []);

  // 搜尋和篩選邏輯
  useEffect(() => {
    let updatedProducts = products;

    if (selectedCategory && selectedCategory !== 'All') {
      updatedProducts = updatedProducts.filter(product => product.category === selectedCategory);
    }

    if (searchKeyword) {
      updatedProducts = updatedProducts.filter(product =>
        product.name.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }

    setFilteredProducts(updatedProducts);
    setCurrentPage(1); // 重置頁碼
  }, [selectedCategory, searchKeyword, products]);

  // 取得當前頁的商品
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  // 換頁處理
  const handlePageChange = (page: number) => setCurrentPage(page);

  // 更新商品購買公斤數
  const handleQuantityChange = (id: number, value: string) => {
    const weight = parseFloat(value);
    if (!isNaN(weight) && weight >= 0) {
      setQuantity((prev) => ({ ...prev, [id]: weight }));
    }
  };

  // 加入購物車
  const addToCart = (product: Product) => {
    const totalWeight = quantity[product.id] || 0; // 默認重量為0
    if (totalWeight <= 0) return;

    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, totalWeight: item.totalWeight + totalWeight }
            : item
        );
      } else {
        return [
          ...prev,
          { id: product.id, name: product.name, totalWeight, unitWeight: product.unitWeight },
        ];
      }
    });
    setQuantity((prev) => ({ ...prev, [product.id]: 0 })); // 重置購買公斤數
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 mb-3">
          <InputGroup className="col-lg-3 mb-3">
            <Form.Control
              placeholder="搜尋商品"
              aria-label="搜尋商品"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <InputGroup.Text><FontAwesomeIcon icon={faMagnifyingGlass} /></InputGroup.Text>
          </InputGroup>
        </div>
        <div className="col-lg-2 mb-3">
          <Form.Select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category.label} value={category.value}>
                {category.label}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="col-lg-5 mb-3">
          <h5 style={{lineHeight: "2.5rem"}}>
            <strong>送貨地址: </strong>
            <span id="address">彰化縣伸港鄉溪底村(全興工業區)工八路9號(附品檢單)</span>
          </h5>
        </div>
        <div className="col-lg-2 mb-3">
          <h5 style={{lineHeight: "2.5rem"}}>
            <strong>收貨人: </strong>
            <span id="receiver">王美花 小姐</span>
          </h5>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>商品名稱</th>
            <th>描述</th>
            <th>包裝重量</th>
            <th>購買公斤數</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
        {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.unitWeight} kg</td>
                <td>
                  <input
                    type="number"
                    min="0"
                    value={quantity[product.id] || 0}
                    onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                  />
                  <div className="fw-light p-0 mt-1">
                    {(() => {
                      const totalWeight = quantity[product.id] || 0;
                      const fullUnits = Math.floor(totalWeight / product.unitWeight); // 計算滿桶數量
                      const remainingWeight = totalWeight % product.unitWeight; // 計算剩餘重量
                      return `(滿桶: ${fullUnits} 桶 / 未滿桶: ${remainingWeight} kg)`;
                    })()}
                  </div>
                </td>
                <td>
                  <button className="btn btn-primary" onClick={() => addToCart(product)}>
                    加入
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="text-center">
                沒有符合條件的商品
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {/* 分頁 */}
      <nav>
        <ul className="pagination justify-content-center">
          {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerPage) }, (_, index) => (
            <li
              key={index}
              className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {/* 購物車 */}
      <div className="mt-5">
        <h3>購物車</h3>
        {cart.length > 0 ? (
          <ul className="list-group">
            {cart.map((item) => {
              const fullUnits = Math.floor(item.totalWeight / item.unitWeight); // 滿桶數量
              const remainingWeight = item.totalWeight % item.unitWeight; // 剩餘公斤數

              return (
                <li key={item.id} className="list-group-item">
                  {item.name} - 購買: {item.totalWeight} kg
                  <br />
                  <span>
                    滿桶: {fullUnits} / 未滿桶: {remainingWeight} kg
                  </span>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>購物車內沒有商品</p>
        )}
      </div>
    </div>
  );
};
