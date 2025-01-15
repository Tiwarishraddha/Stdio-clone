import React from "react";

const Home = () => {
  return (
    <div className="bg-zinc-800 w-full">
      {/* isko do main divide kar diya upar ka part alag neeche ka alag */}
      {/* Main Part */}
      <div className="bg-black text-white flex px-20 shadow-xl ">
        <div className="flex flex-col w-1/2 gap-10 my-24 text-start ">
          <h1 className="text-4xl md:text-6xl font-semibold w-2/3 ">
            Where Art Meets Skin
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            tempore magnam excepturi pariatur ullam nemo praesentium,
            perferendis cumque necessitatibus maxime.
          </p>
          {/* buttons */}
          <div className="flex gap-12 ">
            <button className="bg-white text-black px-6 py-2 rounded-md ">
              Book Now
            </button>
            <button className="px-6 py-2 rounded-md border-2 border-white hover:bg-white hover:text-black transition-all duration-100 ease-linear">
              View Gallery{" "}
            </button>
          </div>
        </div>
        {/* right wala part */}
        <div className="flex justify-center  items-end mb-20">
          <div >
            <span className="w-1 h-1 mt-7 ml-2 rounded-full absolute bg-white"></span>
            <span className="bg-slate-900  transparent border inline-block  rounded-lg p-4 ">
              Currently Taking Appointments
            </span>
          </div>
        </div>
      </div>


      {/* Neeche ka numbers wala part */}
      <div className="text-white grid grid-cols-2 md:grid-cols-4 px-20 py-12 bg-slate-900 ">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold ">10+</h1>
            <h4 className="text-sm font-light">Years of Experience</h4>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold ">10+</h1>
            <h4 className="text-sm font-light">Years of Experience</h4>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold ">10+</h1>
            <h4 className="text-sm font-light">Years of Experience</h4>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold ">10+</h1>
            <h4 className="text-sm font-light">Years of Experience</h4>
          </div>
        </div>
    </div>
  );
};

export default Home;
