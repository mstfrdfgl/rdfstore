import React from "react";
import banner from "../../public/images/technology 1.png";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#96e9fb] to-[#abecd6] h-[600px] flex flex-col md:flex-row items-center justify-between mx-auto mt-12 px-4 pt-8 rounded-3xl overflow-hidden w-[90%]">
      {" "}
      {/* Sol Taraf: Başlık ve Açıklama */}
      <div className="flex flex-col justify-center items-center md:items-start space-y-6  text-center md:text-left md:order-1 mx-24">
        {" "}
        <h4 className="text-sm font-semibold text-[#2A7CC7]">SUMMER 2020</h4>
        <h1 className="text-6xl font-bold text-gray-800">NEW COLLECTION</h1>
        <p className="text-gray-600">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="bg-[#23A6F0] text-white px-8 py-3 rounded-md hover:bg-blue-500 transition duration-300">
          SHOP NOW
        </button>
      </div>
      {/* Sağ Taraf: Model Görseli */}
      <div className="flex justify-center items-center w-full md:w-1/2 h-full md:order-2 mt-4 md:mt-0">
        <img
          src={banner}
          alt="New Collection Model"
          className="object-none w-full h-full md:rounded-lg" // Resmin tam boy kaplaması için
        />
      </div>
    </div>
  );
};

export default Banner;
