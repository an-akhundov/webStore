import Shelf from "../components/shelf/Shelf";
import SectionName from "../components/section-name/SectionName";
import Goods from "../components/goods/Goods";

export default function AutoChemical() {
  return (
    <>
      <Shelf>
        <SectionName text="Auto Chemical Goods" />
        <Goods />
      </Shelf>
    </>
  );
}
