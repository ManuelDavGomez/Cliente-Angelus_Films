"use client";
import React, { useState } from "react";
import Image from "next/image";

const ZoomGalery = ({ item }) => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleZoom = (image) => {
    setZoomedImage(image);
  };

  const handleCloseZoom = () => {
    setZoomedImage(null);
  };

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {item.images.map((image, index) => (
        <div
          key={index}
          className="w-full bg-gray-200 hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={() => handleZoom(image)}
        >
          <Image
            src={image}
            alt={`Gallery image ${index + 1}`}
            width={100}
            height={100}
            loading="lazy"
            className="object-cover w-full h-[600px] shadow-xl"
          />
        </div>
      ))}

      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleCloseZoom}
        >
          <div className="relative max-w-sm max-h-full min-[540px]:max-w-sm min-[1920px]:max-w-lg  min-[2100px]:max-w-xl min-[2400px]:max-w-[90vw]">
            <Image
              src={zoomedImage}
              alt="Zoomed Image"
              width={800}
              height={600}
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={handleCloseZoom}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ZoomGalery;
