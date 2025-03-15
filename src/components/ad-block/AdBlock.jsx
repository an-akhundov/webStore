import "./adBlock.css";
import Brand from "../brand/Brand";
import { translation } from "../../utils/translations";
import { useSelector } from "react-redux";

export default function AdBlock() {
  const language = useSelector((state) => state.lang.language);

  return (
    <div className="ad">
      <p className="ad__text"> {translation[language].yourAdCanBeHere}</p>
      <Brand></Brand>
    </div>
  );
}
