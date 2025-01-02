import { useState, useEffect } from "react";

// 商品介面
interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  unitWeight: number; // 每包裝重量 (公斤)
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
  const [searchKeyword, setSearchKeyword] = useState<string>(""); // 搜尋關鍵字
  const [cart, setCart] = useState<CartItem[]>([]); // 購物車內容
  const [quantity, setQuantity] = useState<{ [key: number]: number }>({}); // 商品購買公斤數

  useEffect(() => {
    const mockProducts: Product[] = [
      { id: 1, name: "Product A", category: "化學品", description: "Description A", price: 100, unitWeight: 60 },
      { id: 2, name: "Product B", category: "化學品", description: "Description B", price: 150, unitWeight: 150 },
    ];

    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  // 搜尋邏輯
  useEffect(() => {
    const updatedProducts = searchKeyword
      ? products.filter((product) =>
          product.name.toLowerCase().includes(searchKeyword.toLowerCase())
        )
      : products;

    setFilteredProducts(updatedProducts);
  }, [searchKeyword, products]);

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
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="搜尋商品"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>商品名稱</th>
            <th>描述</th>
            <th>包裝重量</th>
            <th>單價</th>
            <th>購買公斤數</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.unitWeight} kg</td>
              <td>${product.price}</td>
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
          ))}
        </tbody>
      </table>

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
