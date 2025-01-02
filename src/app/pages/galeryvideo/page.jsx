import Image from "next/image";
import "./pagevideo.css";
import Link from "next/link";
import Datas from "../../data/data.js";

const Page = () => {
  return (
    <>
      <section
        className="flex justify-center flex-col items-center w-full p-6 pt-32 pb-40"
        id="background1"
      >
        <article className="flex justify-center flex-col items-center w-[95%] gap-10  min-[1150px]:w-[1100px] relative min-[450px]:w-[80%] min-[768px]:w-full">
          <h1 className="font-bold">
            Galeria de <span className="text-[#f70404]">Videos</span>
          </h1>

          <div className="main_container text-center">
            <ul>
              {Datas.map((item) => (
                <li key={item.id}>
                  <a href={`example/${item.id}`}>
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                  </a>
                </li>
              ))}
            </ul>

            {/* <section className="flex items-center flex-col justify-center">
              <Link href="/videos/1">
               
                  <Image
                    src="https://images.unsplash.com/photo-1551133990-70307d02dc94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGluZG9vcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
                    alt="Video Thumbnail"
                    width={500}
                    height={500}
                    className="hover:opacity-70 duration-300 ease-in-out"
                  />
                  <p className="font-bold text-[16px] mt-5">xdxdxd</p>
                  <p className="text-gray-700">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
          
              </Link>
            </section> */}
          </div>
        </article>
      </section>
    </>
  );
};

export default Page;
