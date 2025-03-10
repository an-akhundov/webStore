import Shelf from "../components/shelf/Shelf";
import SectionName from "../components/section-name/SectionName";
import Goods from "../components/goods/Goods";
import { useRouteLoaderData } from "react-router-dom";

export default function Solvents() {
  const data = useRouteLoaderData("root");
  const solvents = data.solvent;

  return (
    <>
      <Shelf>
        <SectionName text="Solvents" />
        <Goods goods={solvents} isProduct />
      </Shelf>
    </>
  );
}
