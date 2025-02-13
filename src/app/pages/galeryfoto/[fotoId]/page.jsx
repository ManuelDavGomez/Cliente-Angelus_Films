import Fotodata from "../../../data/fotoData.js";
import ZoomGalery from "@/app/components/ZoomGalery.jsx";

export async function generateStaticParams() {
  return Fotodata.map((item) => ({
    fotoId: item.id.toString(),
  }));
}

export default function VideoId({ params }) {
  const { fotoId } = params;
  const item = Fotodata.find((item) => item.id === fotoId);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <section className="flex justify-center flex-col items-center w-full p-6 pt-[200px] min-[768px]:pt-36 pb-40 bg-white">
      <article className="flex justify-center flex-col items-center w-[95%] min-[1150px]:w-[1100px] relative min-[450px]:w-[80%] min-[768px]:w-full  min-[1500px]:w-[1400px]">
        <h1 className="mb-10 font-bold">{item.title}</h1>

        <ZoomGalery item={item} />
      </article>
    </section>
  );
}
