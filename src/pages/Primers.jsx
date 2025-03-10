import Shelf from "../components/shelf/Shelf";
import SectionName from "../components/section-name/SectionName";
import Goods from "../components/goods/Goods";
import { useRouteLoaderData } from "react-router-dom";

export default function Primers() {
  const data = useRouteLoaderData("root");
  const primers = data.primer;

  return (
    <>
      <Shelf>
        <SectionName text="Primers" />
        <Goods goods={primers} isProduct />
      </Shelf>
    </>
  );
}
