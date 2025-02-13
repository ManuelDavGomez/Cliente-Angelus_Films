import PortafolioCarousel from "../PortafolioCarousel";
import Data from "../../data/fotoData.js"
import "./galery.css";

const Galery = () => {
  return (
    <section
      className="flex justify-center flex-col items-center w-full p-6 pt-32 pb-32"
      id="background1"
    >
      <article className="flex justify-center flex-col items-center w-[95%] gap-10 min-[768px]:flex-row min-[1150px]:w-[1100px] min-[768px]:items-start relative min-[450px]:w-[80%] min-[768px]:w-full">
        <PortafolioCarousel items={Data} />
      </article>
    </section>
  );
};

export default Galery;
