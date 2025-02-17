import Shelf from "../components/shelf/Shelf";
import SectionName from "../components/section-name/SectionName";
import Goods from "../components/goods/Goods";
import ColorFill from "../components/color-fill/ColorFill";

export default function CarPaints() {
  return (
    <>
      <div className="main-page">
        <Shelf>
          <SectionName text="Car Paints" />
          <Goods />
        </Shelf>
      </div>
    </>
  );
}
