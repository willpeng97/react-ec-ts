import { FC } from "react";
import { Table, Button, Form } from "react-bootstrap";

// 購物車商品介面
export interface CartItem {
  id: number;
  name: string;
  totalWeight: number; // 購買的總公斤數
  unitWeight: number; // 每包裝重量 (公斤)
}

export const Cart: FC<{ cart: CartItem[]; updateCart: (updatedCart: CartItem[]) => void }> = ({
  cart,
  updateCart,
}) => {
  const handleQuantityChange = (id: number, newWeight: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, totalWeight: newWeight } : item
    );
    updateCart(updatedCart);
  };

  const handleRemoveItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  return (
    <div className="container mt-4">
      <h2>購物車</h2>
      {cart.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>商品名稱</th>
              <th>包裝重量</th>
              <th>購買公斤數</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => {
              const fullUnits = Math.floor(item.totalWeight / item.unitWeight);
              const remainingWeight = item.totalWeight % item.unitWeight;

              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.unitWeight} kg</td>
                  <td>
                    <Form.Control
                      type="number"
                      min="0"
                      value={item.totalWeight}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseFloat(e.target.value) || 0)
                      }
                    />
                    <div className="fw-light mt-1">
                      (滿桶: {fullUnits} 桶 / 未滿桶: {remainingWeight} kg)
                    </div>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      移除
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <p>購物車內沒有商品</p>
      )}
      <Button variant="primary" className="mt-3">
        確認結帳
      </Button>
    </div>
  );
};