import "./goods.css";
import { GOODS } from "../../data";
import GoodsCard from "../goods-card/GoodsCard";

export default function Goods() {
  return (
    <>
      {GOODS.map((product) => (
        <GoodsCard {...product} key={product.id} />
      ))}
    </>
  );
}
