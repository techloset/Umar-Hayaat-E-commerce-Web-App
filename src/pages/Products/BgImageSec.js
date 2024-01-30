import React from "react";

export default function BgImageSec() {
  return (
    <>
    <div className="mt-[15px] md:mt-[30px] mb-[30px] md:mb-[60px]">
      <div className="imageBackgroundForOffers py-[50px] md:py-[70px] lg:py-[100px] md:px-[60px]">
        {/* Content in image */}

        <div className="md:flex  md:justify-end md:items-center">
          <div className="flex flex-col justify-center items-center gap-[12px]">
            {/* ... */}
            <div className="flex flex-shrink-0 justify-center items-center">
              <button className="bg-[#EDA415] rounded-full px-[20px] py-[7px] md:px-[30px] md:py-[10px] text-[10px] text-[#fff]">
                New laptop
              </button>
            </div>
            <div className="flex flex-nowrap shrink-0">
              <h3 className="text-[#2E8FC5] font-extrabold text-[25px] md:text-[35px]">
                Sale up to 50% off
              </h3>
            </div>
            <div>
              <p className="text-[#fff] text-[12px] md:text-[14px]">
                12 inch hd display
              </p>
            </div>
            <div className="flex flex-shrink-0 justify-center items-center">
              <button className="bg-[#EDA415] rounded-full px-[20px] py-[7px] md:px-[30px] md:py-[10px] text-[10px] text-[#fff]">
                Shop now
              </button>
            </div>
            {/* ... */}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
