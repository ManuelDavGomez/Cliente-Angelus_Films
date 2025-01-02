import Image from "next/image";
import Image11 from "../../../app/assets/image1.jpg";
import "./profile.css";

const Profile = () => {
  return (
    <article className="flex justify-center flex-col items-center w-full pt-[100px] pb-[120px] p-5" id="background2">
      <section className="flex justify-center w-full flex-col items-center min-[768px]:flex-row min-[1150px]:w-[1000px] min-[1300px]:w-[1200px]">
        <section className="text-black w-[100%] flex items-center justify-center">
          <Image
            src={Image11}
            className="rounded-full w-[300px] h-[300px] object-cover shadow-lg shadow-[#000000d5]"
            alt="Picture of the author "
            loading="lazy"
          />
        </section>
        <section className="w-[100%] flex flex-col items-center justify-center min-[769px]:items-start mt-5 text-black">
          <h1>Yorks Hernandez</h1>
          <h5 className="font-bold ">CEO</h5>
          <p className="k mt-3 text-center min-[769px]:text-start font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className=" mt-3 text-center min-[769px]:text-start font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="mt-3 text-center min-[769px]:text-start font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </section>
      </section>
    </article>
  );
};

export default Profile;
