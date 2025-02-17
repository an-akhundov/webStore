import CardInfo from "../components/card-info/CardInfo";
import SectionName from "../components/section-name/SectionName.jsx";

export default function ProductInfo() {
  return (
    <div className="main-page">
      <SectionName text="Product Info" />
      <CardInfo />
    </div>
  );
}
