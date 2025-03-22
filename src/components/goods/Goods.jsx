import "./goods.css";
import GoodsCard from "../goods-card/GoodsCard";

export default function Goods({ goods, isProduct, isMain }) {
  return (
    <div className="goods">
      {goods.map((product) => {
        return (
          <GoodsCard
            {...product}
            key={product.id}
            isProduct={isProduct}
            isMain={isMain}
          />
        );
      })}
    </div>
  );
}
