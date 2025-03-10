import Shelf from "../components/shelf/Shelf";
import SectionName from "../components/section-name/SectionName";
import Goods from "../components/goods/Goods";
import { useRouteLoaderData } from "react-router-dom";

export default function Putties() {
  const data = useRouteLoaderData("root");
  const putties = data.putty;

  return (
    <>
      <Shelf>
        <SectionName text="Putties" />
        <Goods goods={putties} isProduct />
      </Shelf>
    </>
  );
}
