import Shelf from "../components/shelf/Shelf";
import SectionName from "../components/section-name/SectionName";
import Goods from "../components/goods/Goods";
import { useRouteLoaderData } from "react-router-dom";

export default function CarPaints() {
  const data = useRouteLoaderData("root");
  const paints = data.paint;

  return (
    <>
      <div className="main-page">
        <Shelf>
          <SectionName text="Car Paints" />
          <Goods goods={paints} isProduct />
        </Shelf>
      </div>
    </>
  );
}
