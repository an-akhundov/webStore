import Shelf from "../components/shelf/Shelf";
import SectionName from "../components/section-name/SectionName";
import Goods from "../components/goods/Goods";
import { useLocation } from "react-router-dom";

export default function SearchPage() {
  const location = useLocation();

  return (
    <>
      <Shelf>
        {location.state.data.length > 0 && (
          <>
            <SectionName text="Your searched items:" />
            <Goods goods={location.state.data} isProduct />
          </>
        )}
        {location.state.data.length <= 0 && (
          <SectionName text="No such items" />
        )}
      </Shelf>
    </>
  );
}
