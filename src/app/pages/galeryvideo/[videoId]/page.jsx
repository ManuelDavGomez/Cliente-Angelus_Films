import Videodata from "../../../data/videoData.js";

export async function generateStaticParams() {
  return Videodata.map((item) => ({
    videoId: item.id.toString(),
  }));
}

export default function VideoId({ params }) {
  const { videoId } = params;
  const item = Videodata.find((item) => item.id === videoId);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <section className="flex justify-center flex-col items-center w-full p-6 pt-32 pb-40 bg-white">
      <article className="flex justify-center flex-col items-center w-[95%] gap-10  min-[1150px]:w-[1100px] relative min-[450px]:w-[80%] min-[768px]:w-full">
        <h1>{item.title}</h1>
        <p>{item.content}</p>
      </article>
    </section>
  );
}