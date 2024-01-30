import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-[#F4F4F4] w-full navbarStyles">
      <div className="container w-full flex flex-wrap md:flex-nowrap gap-[10px] justify-center md:justify-start md:gap-[98px]   ">
        {/* Sec-1 */}
        <div className="w-auto shrink-0">
          <details className="dropdown  ">
            <summary role="button">
              <a className="button text-[16px] mt-[10px] md:mt-[0px] ">
                Browse categories{" "}
                <RiArrowDropDownLine className="inline font-normal ml-[-5px] text-[24px]" />{" "}
              </a>
            </summary>
            <ul>
              <li>
                <a href="#">All categories</a>
              </li>
              <li>
                <a href="#">Laptop</a>
              </li>
              <li>
                <a href="#">Tablet</a>
              </li>
              <li>
                <a href="#">Headphones</a>
              </li>
              <li>
                <a href="#">Other</a>
              </li>
            </ul>
          </details>
        </div>

        {/* Sec-2 */}
        <div className="flex items-center justify-end lg:justify-between w-full">
          <div className=" h-full hidden lg:block">
            <ul className="flex gap-[29px] items-center  h-full py-[20px]   ">
              <li>
                {" "}
                <Link>Home <RiArrowDropDownLine className="hidden xl:inline font-normal ml-[-5px] text-[24px]" /></Link>{" "}
              </li>
              <li>
                {" "}
                <Link>Catalog <RiArrowDropDownLine className="hidden xl:inline font-normal ml-[-5px] text-[24px]" /></Link>{" "}
              </li>
              <li>
                {" "}
                <Link>Blog</Link>{" "}
              </li>
              <li>
                {" "}
                <Link>Pages <RiArrowDropDownLine className="hidden xl:inline font-normal ml-[-5px] text-[24px]" /></Link>{" "}
              </li>
              <li>
                {" "}
                <Link>About us</Link>{" "}
              </li>
            </ul>
          </div>
         
         
          <div className=" w-full md:w-auto">
            <p className="text-[#003F62] text-[16px] font-bold text-center mb-[15px] md:mb-[0px]">30 Days Free Return</p>
          </div>
        </div>
      </div>
    </div>
  );
}
