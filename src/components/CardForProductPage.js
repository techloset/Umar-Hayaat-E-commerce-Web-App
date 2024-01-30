import React from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

export default function CardForProductPage({
  imageSrc,
  productTitle,
  productRatings,
  productPrice,
}) {
  return (
    <>
      <div className="group border-[0.984px] px-[75px]    md:px-[90px] lg:px-[43px] py-[30px] border-solid border-[#B6B6B6] rounded-xl">
        {/* Image Sec */}
        <div>
          <img
            src={imageSrc}
            className="w-[172.275px] h-[150.185px]"
            alt="ProductImage"
          />
        </div>

        {/* Product Details */}
        <div className="group-hover:hidden w-full text-start mt-[30px] ">
          {/* Title */}
          <div className="mb-[3px]">
            <h5 className="text-[#1B5A7D] text-[16px] font-semibold">
              {productTitle.slice(0, 15)} ...
            </h5>
          </div>

          {/* Price */}
          <div>
            <p className="text-[#4A4A4A] text-[12px] font-semibold">
              ${productPrice}
            </p>
          </div>

          {/* Stars */}
          <div className="star-icon flex mt-2 items-center">
            <div className="fa-solid fa-star text-gray-300 hover:text-[#f0bb4f]">
              <FaStar size={16} />
            </div>
            <div className="fa-solid fa-star text-gray-300 hover:text-[#f0bb4f] ms-1">
              <FaStar size={16} />
            </div>
            <div className="fa-solid fa-star text-gray-300 hover:text-[#f0bb4f] ms-1">
              <FaStar size={16} />
            </div>
            <div className="fa-solid fa-star text-gray-300 hover:text-[#f0bb4f] ms-1">
              <FaStar size={16} />
            </div>
            <div className="fa-solid fa-star text-gray-300 hover:text-[#f0bb4f] ms-1">
              <FaStar size={16} />
            </div>
            <div className="text-[#cd9d3f] ms-1 text-[12px]">
              ({productRatings})
            </div>
          </div>
        </div>

        {/* Add to cart button */}
        <div className="hidden  mt-[75px]  group-hover:block w-full ">
          <div className="flex justify-between mt-[-30px] mb-[6px]">
            <div>
              <button className="flex justify-between items-center gap-[30px] text-[#272727] hover:text-white bg-[#87BCD9] hover:bg-[#4d9eca] px-[18px] py-[13px] rounded-full">
                <span className="inline text-[14px]"> Add to cart</span>{" "}
                <span className="bg-[#EDA415] px-[5px] text-[#fff]  rounded-full">
                  <IoCartOutline size={14} className="inline " />
                </span>{" "}
              </button>
            </div>
            
          </div>
        </div>
        

      </div>
    </>
  );
}
