import Shelf from "../components/shelf/Shelf";
import SectionName from "../components/section-name/SectionName";
import Goods from "../components/goods/Goods";
import { useRouteLoaderData } from "react-router-dom";

export default function Spares() {
  const data = useRouteLoaderData("root");
  const polish = data.polish;

  return (
    <>
      <Shelf>
        <SectionName text="Polish" />
        <Goods goods={polish} isProduct />
      </Shelf>
    </>
  );
}
