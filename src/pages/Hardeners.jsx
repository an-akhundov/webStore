import Shelf from "../components/shelf/Shelf";
import SectionName from "../components/section-name/SectionName";
import Goods from "../components/goods/Goods";
import { useRouteLoaderData } from "react-router-dom";

export default function Hardeners() {
  const data = useRouteLoaderData("root");
  const hardeners = data.hardener;

  return (
    <>
      <Shelf>
        <SectionName text="Hardeners" />
        <Goods goods={hardeners} isProduct />
      </Shelf>
    </>
  );
}
