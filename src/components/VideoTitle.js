import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white ">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
      <div className="flex  space-x-2">
        <button className="bg-white text-black px-16 p-4 rounded-lg text-xl hover:bg-opacity-80">▶ Play</button>
        <div></div>
        <button className="bg-gray-700 text-white px-16 p-4 rounded-lg text-xl">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
