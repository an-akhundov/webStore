import Shelf from "../components/shelf/Shelf";
import SectionName from "../components/section-name/SectionName";
import Goods from "../components/goods/Goods";
import { useRouteLoaderData } from "react-router-dom";
import { translation } from "../utils/translations";
import { useSelector } from "react-redux";

export default function AutoClear() {
  const data = useRouteLoaderData("root");
  const clear = data.clear;
  const language = useSelector((state) => state.lang.language);

  return (
    <>
      <Shelf>
        <SectionName text={translation[language].avtoClear} />
        <Goods goods={clear} isProduct />
      </Shelf>
    </>
  );
}
