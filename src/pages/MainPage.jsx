import Shelf from "../components/shelf/Shelf";
import SectionName from "../components/section-name/SectionName";
import Goods from "../components/goods/Goods";
import Slider from "../components/slider/Slider";
import sliderImg1 from "../assets/slider/slider-5.webp";
import sliderImg2 from "../assets/slider/slider-6.avif";
import sliderImg3 from "../assets/slider/slider-3.jpg";
import sliderImg4 from "../assets/slider/slider-4.jpg";

const sliderImages = [
  { image: sliderImg1, id: 1 },
  { image: sliderImg2, id: 2 },
  { image: sliderImg3, id: 3 },
  { image: sliderImg4, id: 4 },
];

export default function MainPage() {
  return (
    <div className="main-page">
      <Slider sliderImages={sliderImages} />
      <Shelf>
        <SectionName text="Best Choices" />
        <Goods />
      </Shelf>
    </div>
  );
}
