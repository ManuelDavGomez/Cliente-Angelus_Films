import Image from "next/image";
import Image1 from "../../../app/assets/image1.jpg";
import Image2 from "../../../app/assets/image2.jpg";
import "./galery.css";

const Galery = () => {
  return (
    <section
      className="flex justify-center flex-col items-center w-full p-6 pt-32 pb-32"
      id="background1"
    >
      <article className="flex justify-center flex-col items-center w-[95%] gap-10 min-[768px]:flex-row min-[1150px]:w-[1100px] min-[768px]:items-start relative min-[450px]:w-[80%] min-[768px]:w-full">
        <a href="/pages/galeryfoto">
        <div className="w-[100%] flex items-center justify-center rounded-lg relative shadow-lg shadow-[#000000d5] hover:scale-105 transition-all duration-300 cursor-pointer">
          <section className="flex items-center justify-center rounded-2xl text-white bg-[#f70404] absolute bottom-[40px] left-auto  w-[46vw] h-[7vw]  p-1 font-semibold min-[768px]:w-[30vw] min-[768px]:h-[4vw] min-[1150px]:w-[240px] min-[1150px]:h-[46px]">
            <p className="text-[5vw] min-[768px]:text-[3vw] min-[1150px]:text-[24px]">
              Galeria de Fotos
            </p>
          </section>
          <Image
            src={Image1}
            className="w-full h-full rounded-lg"
            alt="Picture of the author"
            loading="lazy"
          />
        </div>
        </a>
        <a href="/pages/galeryvideo">
        <div className="w-[100%] flex items-center justify-center rounded-lg relative shadow-lg shadow-[#000000d5] hover:scale-105 transition-all duration-300 cursor-pointer">
          <section className="flex items-center justify-center rounded-2xl text-white bg-[#f70404] absolute bottom-[40px] left-auto w-[46vw] h-[7vw] p-1 font-semibold min-[768px]:w-[30vw] min-[768px]:h-[4vw] min-[1150px]:w-[240px] min-[1150px]:h-[46px]">
            <p className="text-[5vw] min-[768px]:text-[3vw] min-[1150px]:text-[24px]">
              Galeria de Videos
            </p>
          </section>
          <Image
            src={Image2}
            className="w-full h-full rounded-lg"
            alt="Picture of the author"
            loading="lazy"
          />
        </div>
        </a>
      </article>
    </section>
  );
};

export default Galery;
