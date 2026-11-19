import { VerticalSlider } from "./VerticalSlider";

export const metadata = {
  title: "Vertical Slider – Eskil",
  description:
    "Eskil Vertical Slider — BM62 Armchair, Swoon Chair, Werner Ox and Lounge Chair in full-screen vertical sections.",
};

const SLIDES = [
  {
    img: "/sites/eskil/2022/03/h9-img-1.jpg",
    title: "BM62 ARMCHAIR",
    designer: "Erik Jørgensen",
    color: "Dark grey",
    materials: "Wood, leather",
    style: "Contemporary",
    caption: "Channel Tufted Accent Chair with Wood Arms, 29.1”W, Ivory- dark Grey",
  },
  {
    img: "/sites/eskil/2022/07/rev-img-001.jpg",
    title: "Swoon Chair",
    designer: "Cecilie Manz",
    color: "Dark grey",
    materials: "Wood, leather",
    style: "Contemporary",
    caption: "Channel Tufted Accent Chair with Wood Arms, 29.1”W, Ivory- dark Grey",
  },
  {
    img: "/sites/eskil/2022/07/rev-img-002.jpg",
    title: "Werner ox",
    designer: "Cecilie Manz",
    color: "Light grey",
    materials: "Wood, leather",
    style: "Contemporary",
    caption: "Channel Tufted Accent Chair with Wood Arms, 29.1”W, Ivory- dark Grey",
  },
  {
    img: "/sites/eskil/2022/07/rev-img-003.jpg",
    title: "Lounge Chair",
    designer: "Erik Jørgensen",
    color: "Dark grey",
    materials: "Wood, leather",
    style: "Modern",
    caption: "Channel Tufted Accent Chair with Wood Arms, 29.1”W, Ivory- dark Grey",
  },
];

export default function VerticalSliderPage() {
  return (
    <div>
      <VerticalSlider slides={SLIDES} />
    </div>
  );
}
