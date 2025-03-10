import Shelf from "../components/shelf/Shelf";
import SectionName from "../components/section-name/SectionName";
import Goods from "../components/goods/Goods";
import { useRouteLoaderData } from "react-router-dom";

export default function AutoClear() {
  const data = useRouteLoaderData("root");
  const clear = data.clear;

  return (
    <>
      <Shelf>
        <SectionName text="Auto Clear" />
        <Goods goods={clear} isProduct />
      </Shelf>
    </>
  );
}
