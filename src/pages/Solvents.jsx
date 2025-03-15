import Shelf from "../components/shelf/Shelf";
import SectionName from "../components/section-name/SectionName";
import Goods from "../components/goods/Goods";
import { useRouteLoaderData } from "react-router-dom";
import { translation } from "../utils/translations";
import { useSelector } from "react-redux";

export default function Solvents() {
  const data = useRouteLoaderData("root");
  const solvents = data.solvent;
  const language = useSelector((state) => state.lang.language);

  return (
    <>
      <Shelf>
        <SectionName text={translation[language].solvents} />
        <Goods goods={solvents} isProduct />
      </Shelf>
    </>
  );
}
