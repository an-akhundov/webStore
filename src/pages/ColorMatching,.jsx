import Shelf from "../components/shelf/Shelf";
import SectionName from "../components/section-name/SectionName";
import Goods from "../components/goods/Goods";
import { useRouteLoaderData } from "react-router-dom";

export default function ColorMatching() {
  const data = useRouteLoaderData("root");
  const colorMatching = data.matching;

  return (
    <>
      <Shelf>
        <SectionName text="Color Matching" />
        <h2 align="center">To make an order, please use contact number!</h2>
        <Goods goods={colorMatching} />
      </Shelf>
    </>
  );
}
