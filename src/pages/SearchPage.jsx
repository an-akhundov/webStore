import Shelf from "../components/shelf/Shelf";
import SectionName from "../components/section-name/SectionName";
import Goods from "../components/goods/Goods";
import { useLocation } from "react-router-dom";
import { translation } from "../utils/translations";
import { useSelector } from "react-redux";

export default function SearchPage() {
  const location = useLocation();
  const language = useSelector((state) => state.lang.language);

  return (
    <>
      <Shelf>
        {location.state.data.length > 0 && (
          <>
            <SectionName text={translation[language].yourSearchedItems} />
            <Goods goods={location.state.data} isProduct />
          </>
        )}
        {location.state.data.length <= 0 && (
          <SectionName text={translation[language].noSuchItems} />
        )}
      </Shelf>
    </>
  );
}
