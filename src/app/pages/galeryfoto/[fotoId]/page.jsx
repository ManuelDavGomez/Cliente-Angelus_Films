import Fotodata from "../../../data/fotoData.js";
import Image from "next/image.js";

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
      <article className="flex justify-center flex-col items-center w-[95%] min-[1150px]:w-[1100px] relative min-[450px]:w-[80%] min-[768px]:w-full">
        <h1 className="mb-2">{item.title}</h1>
        <p className="mb-16">{item.content}</p>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {item.images.map((image, index) => (
            <section
              key={index}
              className="w-full h-64 bg-gray-200 hover:scale-105 transition-transform duration-300"
            >
              <a href={image} target="_blank" rel="noopener noreferrer">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={100}
                  height={100}
                  loading="eager"
                  className="object-cover w-full h-full"
                />
              </a>
            </section>
          ))}
        </section>
      </article>
    </section>
  );
}
