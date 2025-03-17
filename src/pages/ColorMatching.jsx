import Shelf from "../components/shelf/Shelf";
import SectionName from "../components/section-name/SectionName";
import Goods from "../components/goods/Goods";
import { useRouteLoaderData } from "react-router-dom";
import { translation } from "../utils/translations";
import { useSelector } from "react-redux";

export default function ColorMatching() {
  const data = useRouteLoaderData("root");
  const colorMatching = data.matching;
  const language = useSelector((state) => state.lang.language);

  return (
    <>
      <Shelf>
        <SectionName text={translation[language].colorMatching} />
        <h2 align="center">{translation[language].toMakeAnOrder}</h2>
        <Goods goods={colorMatching} />
      </Shelf>
    </>
  );
}
