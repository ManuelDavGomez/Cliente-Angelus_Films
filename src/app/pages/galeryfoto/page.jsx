import Image from "next/image";
import "./pagefoto.css";
import Link from "next/link";
import Fotodata from "../../data/fotoData.js";

const Page = () => {
  return (
    <>
      <section
        className="flex justify-center flex-col items-center w-full p-6 pt-32 pb-40"
        id="background2"
      >
        <article className="flex justify-center flex-col items-center w-[95%] gap-10  min-[1150px]:w-[1100px] relative min-[450px]:w-[80%] min-[768px]:w-full">
          <h1 className="font-bold mt-24">
            Galeria de <span className="text-[#f70404]">Proyectos</span>
          </h1>

          <div className="main_container text-center">
            {Fotodata.map((data, index) => (
              <Link href={`galeryfoto/${data.id}`} key={index}>
                <Image
                  src={data.images[0]}
                  alt="Video Thumbnail"
                  width={500}
                  height={500}
                  className="hover:scale-105 duration-300 ease-in-out card_img h-[600px] shadow-xl"
                  loading="lazy"
                />
                <p className="font-bold text-[16px] mt-5 mb-10">{data.title}</p>
              </Link>
            ))}
          </div>
        </article>
      </section>
    </>
  );
};

export default Page;
