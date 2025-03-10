import "./goods.css";
import GoodsCard from "../goods-card/GoodsCard";

export default function Goods({ goods, isProduct }) {
  return (
    <div className="goods">
      {goods.map((product) => {
        return (
          <GoodsCard {...product} key={product.id} isProduct={isProduct} />
        );
      })}
    </div>
  );
}
