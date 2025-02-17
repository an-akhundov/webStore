import Shelf from "../components/shelf/Shelf";
import SectionName from "../components/section-name/SectionName";
import Goods from "../components/goods/Goods";

export default function Spares() {
  return (
    <>
      <Shelf>
        <SectionName text="Spares" />
        <Goods />
      </Shelf>
    </>
  );
}
