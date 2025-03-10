import CardInfo from "../components/card-info/CardInfo";
import SectionName from "../components/section-name/SectionName.jsx";
import { useParams, useRouteLoaderData } from "react-router-dom";

export default function ProductInfo() {
  const data = useRouteLoaderData("root");
  const params = useParams();
  const entity = params.id.substring(0, params.id.indexOf("-"));
  const arr = data[entity];
  const product = arr.filter((data) => data.id === params.id);

  return (
    <div className="main-page">
      <SectionName text="Product Info" />
      <CardInfo product={product[0]} />
    </div>
  );
}
