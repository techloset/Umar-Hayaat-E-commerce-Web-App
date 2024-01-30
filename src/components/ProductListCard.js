import React from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Laptop from "../../src/assets/images/LaptopImage.jpg";

export default function ProductListCard({
  imageSrc,
  productTitle,
  productPrice,
  productRatings,
  productID
}) {
  // console.log('props at ProductListCard', imageSrc)
  return (
    <>
      <div className="group flex flex-col rounded-xl cursor-pointer hover:shadow-sm hover:shadow-gray-500 border-solid border-[1px] border-[#A5A5A5]  px-[10px] py-[20px]">
        {/* Image Code */}
        <div className="w-full flex justify-center mb-[10px]">
          <img
            src={imageSrc}
            style={{ objectFit: "cover", backgroundPosition: "center" }}
            className="w-[140px] h-[170px]"
            alt="Speakers"
          />
        </div>
      
        {/* Jo by default ho ga */}
        <div className="group-hover:hidden  w-full text-start mb-[7px] leading-7">
          <div className="mb-[3px]">
            <h5 className="text-[#1B5A7D] text-[14px] font-semibold">
              {productTitle.slice(0, 15)} ...
            </h5>
          </div>
          <div>
            <p className="text-[#4A4A4A] text-[12px] font-semibold">
              ${productPrice}
            </p>
          </div>

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
      
        {/* Jo hover karny par ay ga  */}
        <div className="hidden  mt-[75px]  group-hover:block w-full ">
          <div className="flex justify-between mt-[-30px] mb-[13px]">
            <div>
              <button className="flex justify-between items-center gap-[30px] text-[#272727] hover:text-white bg-[#87BCD9] hover:bg-[#4d9eca] px-[18px] py-[9px] rounded-xl">
                <span className="inline text-[14px]"> Add to cart</span>{" "}
                <span className="bg-[#EDA415] px-[5px] text-[#fff]  rounded-full">
                  <IoCartOutline size={14} className="inline " />
                </span>{" "}
              </button>
            </div>

            <div className="flex items-center text-[#272727] hover:text-white bg-[#87BCD9] hover:bg-[#4d9eca] px-[20px] py-[9px] rounded-xl">
              <Link to={`/product/${productID}`}>
                <IoEyeOutline />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
