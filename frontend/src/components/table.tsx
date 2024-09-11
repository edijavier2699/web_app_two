import whyUstable from "../assets/ComparisionSection.png";
import { MyCarousel } from "./carousel";
import "../styles/carousel.css"

export const WhyUsTable = () => {
  return (
    <section>
      <section className="bg-[#121212]">
        <h3 className="text-white text-3xl w-[80%] mx-auto font-bold text-center pt-[96px] block sm:hidden">
          What Makes Tokunize Different
        </h3>
        <div className="block sm:hidden pb-[96px]">
          <MyCarousel />
        </div>
        <div className="hidden sm:block">
          <img
            alt="tokunize-comparison-table"
            src={whyUstable}
            className="w-full"
          />
        </div>
      </section>
    </section>
  );
};
