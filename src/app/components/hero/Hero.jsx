import "./hero.css";


const Hero = () => {
  return (
    <>
      <section className=" w-full h-full p-5 pt-[200px] pb-20 flex items-center justify-center flex-col gap-5 ">
        <article className="flex flex-col items-center text-center justify-center w-[100%] gap-5 min-[1150px]:w-[1100px] mt-10 mb-32">
          <h1 className="title_hero text-white font-bold">
            FILMAMOS LO QUE OTROS SOLO <span className="text-[#f70404]">IMAGINAN</span>
          </h1>
          <p className="text-white w-[100%] min-[768px]:w-[700px] tracking-widest">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod totam
            laudantium ducimus hic accusamus culpa ut quibusdam ex quaerat vitae
            repellendus ratione eveniet id, aliquid vel suscipit laborum,
            molestiae earum!
          </p>
        </article>

        <article className="mb-5 w-[100%] flex justify-center">
          <iframe
            src="https://www.youtube.com/embed/7cbRyujwCO8?si=0mOmwlBqlollIgJg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="w-[100%] h-[60vw] min-[768px]:w-[100%] min-[768px]:h-[50vw] rounded-lg min-[1150px]:w-[900px] min-[1150px]:h-[500px] shadow-lg shadow-[#00000081]"
          />
        </article>

        <article
          className="flex flex-col items-center text-center justify-center w-[100%] gap-5 
      min-[768px]:flex-row min-[1150px]:w-[1100px] mt-5"
        >
          <h2 className="text-white min-[768px]:w-[30%] font-bold">
            Quienes <span className="text-[#F70404]">somos?</span>
          </h2>
          <p className="text-white w-[100%] min-[768px]:w-[80%] tracking-widest">
            te brindamos soluciones integrales de fotografía profesional y
            producción audiovisual de alta calidad, enfocadas en atraer a tu
            audiencia y fortalecer tu presencia digital. Creamos contenido
            visual impactante que no solo destaca, sino que también genera
            resultados y aumenta tus ventas.
          </p>
        </article>
      </section>
    </>
  );
};

export default Hero;
