import React from "react";
import brand1 from '../../assets/contributedBrands/brand-8.png'
import brand2 from '../../assets/contributedBrands/brand-4.png'
import brand3 from '../../assets/contributedBrands/brand-5.png'
import brand4 from '../../assets/contributedBrands/brand-6.png'
import brand5 from '../../assets/contributedBrands/brand-7.png'

export default function ContributedBrandsBar() {
  return (
    <>
      <div className="bg-[#E2F4FF] flex  md:flex-col justify-center md:justify-around  py-[35px] mt-[-20px] md:mt-[20px] rounded-lg mb-[30px] ">
        <div className="flex flex-col md:flex-row  md:justify-around gap-8">
          {/* 1 */}
          <div className="flex items-center gap-[15px]">
         <img src={brand1} className="w-[170.162px] h-[37.232px]" alt="" />
          </div>
         
          {/* 2 */}
          <div className="flex items-center gap-[15px]">
         <img src={brand2} className="w-[170.162px] h-[37.232px]" alt="" />
          </div>
         
          {/* 3 */}
          <div className="flex items-center gap-[15px]">
         <img src={brand3} className="w-[170.162px] h-[37.232px]" alt="" />
          </div>
         
          {/* 4 */}
          <div className="flex items-center gap-[15px]">
         <img src={brand4} className="w-[170.162px] h-[37.232px]" alt="" />
          </div>
       
          {/* 5 */}
          <div className="flex items-center gap-[15px]">
         <img src={brand5} className="w-[170.162px] h-[37.232px]" alt="" />
          </div>
       
           
        </div>
      </div>
    </>
  );
}
