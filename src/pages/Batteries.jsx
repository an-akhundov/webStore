import Shelf from "../components/shelf/Shelf";
import SectionName from "../components/section-name/SectionName";
import Goods from "../components/goods/Goods";

export default function Batteries() {
  return (
    <>
      <Shelf>
        <SectionName text="Batteries" />
        <Goods />
      </Shelf>
    </>
  );
}
