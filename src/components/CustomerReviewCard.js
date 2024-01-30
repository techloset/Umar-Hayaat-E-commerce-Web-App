import React from "react";
// import yellowBg from "../assets/customerImages/yellowBg.png";
// import blueBg from "../assets/customerImages/blueBg.png";
// import skinBg from "../assets/customerImages/skinBg.png";

export default function CustomerReviewCard({customerImage,customerName}) {
  return (
    <div className=" border-[1px] border-solid border-[#BABABA] p-[20px] rounded-xl ">
      {/* Image & Name */}
      <div className="flex items-center gap-[35px] mb-[20px] ml-[7px]">
        <div>
          <img
            src={customerImage}
            className="w-[60px] h-[60px] outline-dashed outline-[#EDA415] outline-offset-[4px] border-[1px] rounded-full "
            alt="Customer_Image"
          />
        </div>
       
        <div>
          <h4 className="text-[#003F62] text-[14px] font-semibold">{customerName}</h4>
        </div>
      </div>

      {/* Message  */}
      <div className="bg-[#E2F4FF] p-[10px] rounded-lg">
        <p className="text-[#003F62] text-[11px] text-start">
          Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
          bibendum ullamcorper. Phasellus tristique aenean at lorem sed
          scelerisque.
        </p>
      </div>
    </div>
  );
}
