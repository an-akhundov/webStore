import Shelf from "../components/shelf/Shelf";
import SectionName from "../components/section-name/SectionName";
import Goods from "../components/goods/Goods";
import { useRouteLoaderData } from "react-router-dom";
import { translation } from "../utils/translations";
import { useSelector } from "react-redux";

export default function Hardeners() {
  const data = useRouteLoaderData("root");
  const hardeners = data.hardener;
  const language = useSelector((state) => state.lang.language);

  return (
    <>
      <Shelf>
        <SectionName text={translation[language].hardeners} />
        <Goods goods={hardeners} isProduct />
      </Shelf>
    </>
  );
}
