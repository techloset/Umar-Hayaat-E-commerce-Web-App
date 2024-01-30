import React from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import speakers from "../../assets/images/SpeakerForDealPage.png";
import laptop from "../../assets/images/offerSecLaptop.png";
import gameController from "../../assets/images/offerSecGame.png";

export default function OffersSection() {
  return (
    <>
      <div className=" mt-[-80px] md:mt-[-20px] mb-[40px]">
        {/* Background Image Div */}
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

        {/* Cards Sec */}

        <div className=" hidden md:flex flex-col lg:flex-row w-full mt-[50px] gap-[20px]">
          {/* Full height box */}
          <div className="w-full">
            <div className="group flex  items-center rounded-xl cursor-pointer hover:shadow-sm hover:shadow-gray-500 border-solid border-[1px] border-[#A5A5A5]   lg:py-[67px]">
              {/* Image Code */}
              <div className="w-full flex justify-center mb-[10px]">
                <img
                  src={speakers}
                  style={{ objectFit: "cover", backgroundPosition: "center" }}
                  className=""
                  alt="Speakers"
                />
              </div>

              {/* Jo by default ho ga */}
              <div className="flex flex-col items-start  w-full text-start mb-[7px] leading-7">
                {/* 1 */}
                <div className="mb-[3px]">
                  <h5 className="text-[#1B5A7D] text-[14px] font-semibold">
                    JBL bar 2.1 deep bass
                  </h5>
                </div>

                {/* 2 */}
                <div className="mb-[3px]">
                  <p className="text-[#4A4A4A] text-[12px] font-semibold">
                    $11,70
                  </p>
                </div>

                {/* 3 */}
                <div className="star-icon flex  items-center mb-[7px]">
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
                  <div className="text-[#cd9d3f] ms-1 text-[12px]">(3.5)</div>
                </div>

                {/* 4 */}
                <div className="flex gap-[8px] mb-[5px] mt-4 ml-[-6px]">
                  <div className="bg-[#E2F4FF] transition duration-300 hover:bg-[#9dcfee]  text-[#EDA415] font-semibold text-[16px] rounded-full px-[13px] py-[10px]">
                    57
                  </div>
                  <div className="bg-[#E2F4FF] transition duration-300 hover:bg-[#9dcfee]  text-[#EDA415] font-semibold text-[16px] rounded-full px-[17px] py-[10px]">
                    11
                  </div>
                  <div className="bg-[#E2F4FF] transition duration-300 hover:bg-[#9dcfee]  text-[#EDA415] font-semibold text-[16px] rounded-full px-[13px] py-[10px]">
                    33
                  </div>
                  <div className="bg-[#E2F4FF] transition duration-300 hover:bg-[#9dcfee]  text-[#EDA415] font-semibold text-[16px] rounded-full px-[13px] py-[10px]">
                    59
                  </div>
                </div>

                {/*5  */}
                <div className=" mt-14 ml-[-3px]">
                  <div className="flex justify-between mt-[-30px] mb-[13px]">
                    <div className="mr-[15px]">
                      <button className="flex justify-between items-center gap-[30px] text-[#272727] hover:text-white bg-[#87BCD9] hover:bg-[#4d9eca] px-[18px] py-[9px] rounded-xl">
                        <span className="inline text-[14px]"> Add to cart</span>{" "}
                        <span className="bg-[#EDA415] px-[5px] text-[#fff]  rounded-full">
                          <IoCartOutline size={14} className="inline " />
                        </span>{" "}
                      </button>
                    </div>

                    <div className="flex items-center text-[#272727] hover:text-white bg-[#87BCD9] hover:bg-[#4d9eca] px-[20px] py-[9px] rounded-xl">
                      <button>
                        <IoEyeOutline />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Full height box end  */}

          {/*Two small box  */}
          <div className="w-full ">
            {/* 1 */}
            <div className="mb-[20px] ">
              {/* .copied. */}
              <div className="group  flex items-center justify-between rounded-xl cursor-pointer hover:shadow-sm hover:shadow-gray-500 border-solid border-[1px] border-[#A5A5A5]   py-[40px]">
                {/* Image Code */}
                <div className="w-full flex justify-center ">
                  <img
                    src={gameController}
                    style={{ objectFit: "cover", backgroundPosition: "center" }}
                    className="w-[160px] h-[130px]"
                    alt="Speakers"
                  />
                </div>

                {/* Jo by default ho ga */}
                <div className="group-hover:hidden  w-full text-start mb-[7px] leading-7">
                  <div className="mb-[3px]">
                    <h5 className="text-[#1B5A7D] text-[14px] font-semibold">
                      Play game
                    </h5>
                  </div>
                  <div>
                    <p className="text-[#4A4A4A] text-[12px] font-semibold">
                      $11,70
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
                    <div className="text-[#cd9d3f] ms-1 text-[12px]">(4.3)</div>
                  </div>
                </div>

                {/* Jo hover karny par ay ga  */}
                <div className="hidden  shrink-0  group-hover:block mr-[50px]">
                  <div className="flex">
                    <div className="mr-[15px]">
                      <button className="flex justify-between items-center gap-[20px] text-[#272727] hover:text-white bg-[#87BCD9] hover:bg-[#4d9eca] px-[18px] py-[9px] rounded-xl">
                        <span className="inline text-[14px]"> Add to cart</span>{" "}
                        <span className="bg-[#EDA415] px-[5px] text-[#fff]  rounded-full">
                          <IoCartOutline size={14} className="inline " />
                        </span>{" "}
                      </button>
                    </div>

                    <div className="flex items-center text-[#272727] hover:text-white bg-[#87BCD9] hover:bg-[#4d9eca] px-[20px] py-[9px] rounded-xl">
                      <button>
                        <IoEyeOutline />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* .copied. */}
            </div>

            {/* 2 */}
            <div className="mb-[20px] ">
              {/* .copied. */}
              <div className="group  flex items-center justify-between rounded-xl cursor-pointer hover:shadow-sm hover:shadow-gray-500 border-solid border-[1px] border-[#A5A5A5]   py-[40px]">
                {/* Image Code */}
                <div className="w-full flex justify-center ">
                  <img
                    src={laptop}
                    style={{ objectFit: "cover", backgroundPosition: "center" }}
                    className="w-[170px] h-[140px]"
                    alt="Speakers"
                  />
                </div>

                {/* Jo by default ho ga */}
                <div className="group-hover:hidden  w-full text-start mb-[7px] leading-7">
                  <div className="mb-[3px]">
                    <h5 className="text-[#1B5A7D] text-[14px] font-semibold">
                      Electon's Laptop
                    </h5>
                  </div>
                  <div>
                    <p className="text-[#4A4A4A] text-[12px] font-semibold">
                      $90,70
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
                    <div className="text-[#cd9d3f] ms-1 text-[12px]">(4.5)</div>
                  </div>
                </div>

                {/* Jo hover karny par ay ga  */}
                <div className="hidden  shrink-0  group-hover:block mr-[50px]">
                  <div className="flex">
                    <div className="mr-[15px]">
                      <button className="flex justify-between items-center gap-[20px] text-[#272727] hover:text-white bg-[#87BCD9] hover:bg-[#4d9eca] px-[18px] py-[9px] rounded-xl">
                        <span className="inline text-[14px]"> Add to cart</span>{" "}
                        <span className="bg-[#EDA415] px-[5px] text-[#fff]  rounded-full">
                          <IoCartOutline size={14} className="inline " />
                        </span>{" "}
                      </button>
                    </div>

                    <div className="flex items-center text-[#272727] hover:text-white bg-[#87BCD9] hover:bg-[#4d9eca] px-[20px] py-[9px] rounded-xl">
                      <button>
                        <IoEyeOutline />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* .copied. */}
            </div>
          </div>
          {/* Two small box end */}
        </div>
      </div>
    </>
  );
}
