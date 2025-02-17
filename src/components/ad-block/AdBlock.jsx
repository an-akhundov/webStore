import "./adBlock.css";
import Brand from "../brand/Brand";

export default function AdBlock() {
  return (
    <div className="ad">
      <p className="ad__text"> Your Ad can be here!</p>
      <Brand></Brand>
    </div>
  );
}
