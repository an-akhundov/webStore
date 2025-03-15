import Shelf from "../components/shelf/Shelf";
import SectionName from "../components/section-name/SectionName";
import Goods from "../components/goods/Goods";
import { useRouteLoaderData } from "react-router-dom";
import { translation } from "../utils/translations";
import { useSelector } from "react-redux";

export default function CarPaints() {
  const data = useRouteLoaderData("root");
  const paints = data.paint;
  const language = useSelector((state) => state.lang.language);

  return (
    <>
      <div className="main-page">
        <Shelf>
          <SectionName text={translation[language].carPaints} />
          <Goods goods={paints} isProduct />
        </Shelf>
      </div>
    </>
  );
}
