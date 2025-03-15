import Shelf from "../components/shelf/Shelf";
import SectionName from "../components/section-name/SectionName";
import Goods from "../components/goods/Goods";
import { useRouteLoaderData } from "react-router-dom";
import { translation } from "../utils/translations";
import { useSelector } from "react-redux";

export default function Primers() {
  const data = useRouteLoaderData("root");
  const primers = data.primer;
  const language = useSelector((state) => state.lang.language);

  return (
    <>
      <Shelf>
        <SectionName text={translation[language].primers} />
        <Goods goods={primers} isProduct />
      </Shelf>
    </>
  );
}
