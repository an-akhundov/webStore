import "./colorFill.css";
import Logo from "../../assets/colorFill.svg?react";
import { useState } from "react";

export default function ColorFill() {
  const [color, setColor] = useState("black");

  function changeColorRed() {
    setColor("red");
  }

  function changeColorBlue() {
    setColor("blue");
  }

  return (
    <div className="color-fill">
      <Logo fill={color} className="color-fill__img" />
      <button
        onClick={changeColorRed}
        className="color-fill__button-red"
      ></button>
      <button
        onClick={changeColorBlue}
        className="color-fill__button-blue"
      ></button>
    </div>
  );
}
