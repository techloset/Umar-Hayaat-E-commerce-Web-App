import React from "react";
import speaker from "../../src/assets/images/speakers.jpg";
export default function HeroSectionCard() {
  return (
    <div>

    <div className="flex justify-between rounded-xl items-center px-[30px] py-[20px] border-solid border-[1px] border-[#A5A5A5] mx-[10px]">
      <div>
      <img src={speaker}  className="w-[100px]" alt="Speakers" />
      </div>
        <div>
          <div className="mb-[3px]">
            <h5 className="text-[#1B5A7D] text-[18px] font-semibold">Speaker</h5>
          </div>
          <div>
            <p className="text-[#1B5A7D] text-[14px]">(6 items)</p>
          </div>
        </div>
      </div>
    
    </div>
  );
}
