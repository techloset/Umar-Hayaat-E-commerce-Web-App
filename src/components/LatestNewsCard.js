import React from "react";


export default function LatestNewsCard({blogImage}) {
  return (
    <div className="flex flex-col md:flex-row gap-[30px] border-[1px] border-solid border-[#BABABA] p-[20px] rounded-xl ">
      {/* Image */}
      <div className="flex shrink-0 mb-[20px] md:mb-[0px]">
        <img src={blogImage} className="w-[250px] h-[220px]" alt="BlogImage" />
      </div>

      {/* Content  */}
      <div className="flex flex-col text-start justify-center gap-[10px]">
       
        <div>
          <span className="py-[5px] text-[14px] text-[#1B5A7D] font-semibold  px-[20px] rounded-2xl border border-[#D4D4D4]">
            22,oct,2021
          </span>
        </div>
       
        <div>
          <h4 className=" text-[18px] text-[#1B5A7D] font-[1000] ">
            Who avoids a <br /> pain that produces?
          </h4>
        </div>
       
        <div>
          <p className="text-[12px] text-[#1B5A7D]  ">
            Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
            bibendum ullamcorper. Phasellus tristique aenean at lorem sed
            scelerisque.
          </p>
        </div>
       
        <div className="mt-[20px]">
          <p className="text-[10px] text-[#1B5A7D]  ">By spacing tech</p>
        </div>
      
      </div>
    </div>
  );
}
