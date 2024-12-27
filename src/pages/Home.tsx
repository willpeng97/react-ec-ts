import { MenuTile } from "../components/MenuTile/MenuTile";

const MenuTiles = [
  {
    label: "商品一覽",
    link: "/zz_query/product.html",
    image: "/btnGoods.svg",
    fnKey: "342975302766084",
  },
  {
    label: "訂單查詢",
    link: "/zz_query/orderQuery.html",
    image: "/btnGoods.svg",
    fnKey: "362922892413760",
  },
  {
    label: "EC訂單",
    link: "/zz_query/orderMaintain.html",
    image: "/btnGoods.svg",
    fnKey: "362923018316488",
  },
];

export const Home = () => {
  return (
    <div className="container">
      <div id="menu" className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4 text-light py-5">
        {MenuTiles.map((t) => (
          <MenuTile
            fnKey={t.fnKey} // 加上 key 屬性以便於 React 渲染列表
            image={t.image}
            label={t.label}
            link={t.link}
          />
        ))}
      </div>
    </div>
  );
};
